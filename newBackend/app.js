//Utils
const express = require('express');
const multer = require("multer");
const upload = multer();
const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/authRoutes");
const connectDB = require("./src/configs/database");
const session = require("express-session");
const app = express();
const cors = require('cors');

//Middlewares
app.use(bodyParser.json())
app.use(upload.array());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'Keyyys', resave: true, saveUninitialized: true}))
app.use(cors({ origin: true, credentials: true }));

connectDB();

//Routes
app.use('/auth', authRoutes);
app.listen(3000, () => {
    console.log("App listening on port 3000");
});