const connection = require("../config/database");
const { User } = require("../models/user");

const {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render("home.ejs", { listUsers: results });
};
const getABC = (req, res) => {
    res.render("sample.ejs");
};
const getCreatePage = (req, res) => {
    res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // let sql = `INSERT INTO Users (email,name,city) values (?,?,?)`;
    // let [results, fields] = await connection.query(sql, [email, name, city]);
    // console.log("check results :", results);

    // const cat = new Kitten({name:email});
    // cat.save();

    await User.create({
        email,
        name,
        city,
    });
    res.send("create a new user succeed");

    // [results, fields] = await connection.query(`select * from Users u`);
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    // let user = await getUserById(userId);
    let user = await User.findById(userId).exec();
    res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;

    // await updateUserById(email, name, city, userId);
    await User.updateOne({ userId: userId }, { city, name, email });

    // console.log("check results :", results);
    // res.send("update user succeed");
    res.redirect("/");
};

const postDeleteUser = async (req, res) => {
    // let sql ='DELETE FROM Users WHERE id = ?;'
    // let[results,fields] = await connection.query(sql,[userId])
    // res.send ('delete user')
    // let user = await getUserById(userId);
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render("delete.ejs", { userEdit: user });
};
const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;

    // await deleteUserById(id);
    await User.deleteOne({_id:id}).exec();
    res.redirect("/");
};

module.exports = {
    getHomepage,
    getABC,
    getCreatePage,
    getUpdatePage,
    postCreateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser,
};
