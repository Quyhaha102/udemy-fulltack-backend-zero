const {
    CreateProjectService,
    getProjectService,
    deleteProjectService,
    updateProjectService
} = require("../services/projectService");

module.exports = {
    postCreateProject: async (req, res) => {
        let project = await CreateProjectService(req.body);
        return res.status(200).json({
            EC: 0,
            data: project,
        });
    },
    getAllProject: async (req, res) => {
        let result = await getProjectService(req.query);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    deleteProject: async (req, res) => {
        let project = await deleteProjectService(req.body);
        return res.status(200).json({
            EC: 0,
            data: project,
        });
    },
    updateProject: async (req,res) => {
        let project = await updateProjectService(req.body);
        return res.status(200).json({
            EC: 0,
            data: project,
        });
    }
};
