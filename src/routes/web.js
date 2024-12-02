//khai báo route
const express = require("express");
const {
    getCreatePage,
    getHomepage,
    getABC,
    postCreateUser,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
} = require("../controllers/homeController");
const router = express.Router();

//getHomepage
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/create-user", postCreateUser);
router.post("/update-user",postUpdateUser);
router.post("/delete-user/:id",postDeleteUser);
router.post("/delete-user",postHandleRemoveUser);

module.exports = router;    
