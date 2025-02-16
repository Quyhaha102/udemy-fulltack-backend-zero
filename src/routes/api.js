//khai báo route
const express = require("express");
const routerAPI = express.Router();
const {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadMultipleFileApi,
} = require("../controllers/apiController");
const {
    postCreateCustomer,
    postCreateArrayCustomer,
    getAllCustomers,
    updateSingleCustomer,
    deleteACustomer,
    deleteArrayCustomer,
} = require("../controllers/customerController");

const {
    postCreateProject,
    getAllProject,
    updateProject,
    deleteProject,
} = require("../controllers/projectController");

const {
    getAllTask,
    postCreateTask,
    updateTask,
    deleteTask,
} = require("../controllers/taskController");

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postUploadMultipleFileApi);

routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);
routerAPI.get("/customers", getAllCustomers);
routerAPI.put("/customers", updateSingleCustomer);
routerAPI.delete("/customers", deleteACustomer);
routerAPI.delete("/customers-many", deleteArrayCustomer);

routerAPI.post("/projects", postCreateProject);
routerAPI.get("/projects", getAllProject);
routerAPI.put("/projects", updateProject);
routerAPI.delete("/projects", deleteProject);

routerAPI.get("/tasks", getAllTask);
routerAPI.post("/tasks", postCreateTask);
routerAPI.put("/tasks", updateTask);
routerAPI.delete("/tasks", deleteTask);

module.exports = routerAPI;
