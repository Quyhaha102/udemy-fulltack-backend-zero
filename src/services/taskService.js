const { Task } = require("../models/task");
const aqp = require("api-query-params");

module.exports = {
    getAllTaskService: async (data) => {
        let { filter, limit } = aqp(data);
        let offset = (data.page - 1) * limit;
        let result = await Task.find(filter).skip(offset).limit(limit).exec();
        return result;
    },

    postCreateTaskService: async (data) => {
        if (data.type === "EMPTY-TASK") {
            let result = await Task.create(data);
            return result;
        }
    },

    updateTaskService: async (data) => {
        let result = await Task.updateOne({ _id: data.id }, { ...data }).exec();
        console.log("check data", result);
        return result;
    },

    deleteTaskService: async (id) => {
        let result = await Task.deleteByid({ id }).exec();
        return result;
    },
};
