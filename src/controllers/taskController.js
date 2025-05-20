const {
    getAllTaskService,
    postCreateTaskService,
    updateTaskService,
    deleteTaskService,
} = require("../services/taskService");

module.exports = {
    getAllTask: async (req, res) => {
        let task = await getAllTaskService(req.query);
        return res.status(200).json({
            EC: 0,
            data: task,
        });
    },

    postCreateTask: async (req, res) => {
        let task = await postCreateTaskService(req.body);
        return res.status(200).json({
            EC: 0,
            data: task,
        });
    },

    updateTask: async (req, res) => {
        let task = await updateTaskService(req.body);
        return res.status(200).json({
            EC: 0,
            data: task,
        });
    },

    deleteTask: async (req, res) => {
        let task = await deleteTaskService(req.body.id);
        console.log("check req.body", req.body.id);
        return res.status(200).json({
            EC: 0,
            // data: task,
        });
    },
};
