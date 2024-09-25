const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const User = require("./models/user");
const Address = require("./models/address");

const app = express();
app.use(bodyParser.json());

// Synchronize the models with the database
sequelize.sync({ force: true }).then(() => {
  console.log("Database synced!");
});

// route is created here to register the user and address
app.post("/register", async (req, res) => {
  const { name, addresses } = req.body;

  try {
    const user = await User.create({ name });
    const addressPromises = addresses.map((address) =>
      Address.create({ ...address, UserId: user.id })
    );
    await Promise.all(addressPromises);

    res.status(201).json({ message: "User and addresses saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while saving data" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
