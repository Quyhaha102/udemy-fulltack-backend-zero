require("dotenv").config();
const express = require("express"); //commonjs
const path = require("path"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const mysql = require("mysql2");
const connection = require("./config/database");

// import express from "express";
app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
// express().use()
// //config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form dat

//config template engine
configViewEngine(app);

//khai bao route
app.use("/", webRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
