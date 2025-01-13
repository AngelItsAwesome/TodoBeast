//Utils
const express = require('express');
const multer = require("multer");
const upload = multer();
const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/authRoutes");
const connectDB = require("./src/configs/database");
const app = express();

//Middlewares
app.use(bodyParser.json())
app.use(upload.array());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

//Routes
app.use('/auth', authRoutes);
app.listen(3000, () => {
    console.log("App listening on port 3000");
});