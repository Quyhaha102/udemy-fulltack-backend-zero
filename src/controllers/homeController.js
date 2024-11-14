const connection = require("../config/database");

const getHomepage = (req, res) => {
    return res.render("home.ejs");
};
const getABC = (req, res) => {
    res.render("sample");
};
const postCreateUser = (rep, res) => {
    console.log(">>> req.body :", rep.body);
    // rep.body;
    res.send("create a new user sadfasd");
};

module.exports = {
    getHomepage,
    getABC,
    postCreateUser,
};
