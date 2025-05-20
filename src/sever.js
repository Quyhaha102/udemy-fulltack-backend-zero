require("dotenv").config();
const express = require("express"); //commonjs
const path = require("path"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const apiRoutes = require("./routes/api");
const mysql = require("mysql2");
const connection = require("./config/database");
const fileUpload = require("express-fileupload");

const { MongoClient } = require("mongodb");

// import express from "express";
app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
//config fileupload
app.use(fileUpload());

// //config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form dat

//config template engine
configViewEngine(app);

//khai bao route
app.use("/", webRouter);
app.use("/v1/api/", apiRoutes);

// const catcat = new mongoose.model("test", { name: String,age: Number });
// const cat = new catcat({ name: "hhhlll",age: 9 });
// cat.save();

(async () => {
    try {
        await connection();
        // Connection URL
        // const url = process.env.DB_HOST_WITH_DRIVER;
        // const client = new MongoClient(url);
        // //Database name
        // const dbName = process.env.DB_NAME;

        // await client.connect();
        // console.log("Connected successfully to sever");
        // const db = client.db(dbName);
        // const collection = db.collection("project");

        // collection.insertOne({ name: "hoidanit" });

        app.listen(port, () => {
            console.log(`Server is running on port ${port}.`);
        });
    } catch (error) {
        console.log(">>> Error connect to DB: ", error);
    }
})();
