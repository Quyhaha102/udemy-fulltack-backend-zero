const { project } = require("../models/project");
const aqp = require("api-query-params");
module.exports = {
    CreateProjectService: async (Data) => {
        if (Data.type === "EMPTY-PROJECT") {
            let result = await project.create(Data);
            return result;
        }

        if (Data.type === "ADD-USERS") {
            let myProject = await project.findById(Data.projectId).exec();
            // console.log("check myproject", myProject);

            for (let i = 0; i < Data.usersArr.length; i++) {
                myProject.usersInfor.push(Data.usersArr[i]);
                let result = await myProject.save();
                // console.log("check result", result);
            }
            return result;
        }

        if (Data.type === "REMOVE-USERS") {
            let myProject = await project.findById(Data.projectId).exec();

            for (let i = 0; i < Data.usersArr.length; i++) {
                myProject.usersInfor.remove(Data.usersArr[i]);
            }
            let result = await myProject.save();
            return result;
        }

        if (Data.type === "ADD-TASKS") {
            let myProject = await project.findById(Data.projectId).exec();
            // console.log("check myproject", myProject);

            for (let i = 0; i < Data.taskArr.length; i++) {
                myProject.tasks.push(Data.taskArr[i]);
                let result = await myProject.save();
                return result;
                // console.log("check result", result);
            }
        }
    },
    getProjectService: async (data) => {
        let page = data.page;
        const { filter, limit, population } = aqp(data);
        delete filter.page;
        console.log("check population", population);
        let offset = (data.page - 1) * limit;

        let result = await project
            .find({})
            .populate(population)
            .skip(offset)
            .limit(limit)
            .exec();

        return result;
    },
    deleteProjectService: async (id) => {
        await project.deleteOne(id).exec();
        // return result;
    },
    updateProjectService: async (data) => {
        let result = project.updateOne({ _id: data.id }, { ...data }).exec();
        return result;
        // project
        //     .updateOne({ _id: data.id }, { $set: { endDate: data.endDate } })
        //     .exec();
        // project
        //     .updateOne(
        //         { _id: data.id },
        //         { $set: { description: data.description } }
        //     )
        //     .exec();
    },
};
