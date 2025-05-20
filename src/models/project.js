// const { ServerDescription } = require("mongodb");
const mongoose = require("mongoose");
// const customerController = require("../controllers/customerController");
// const { MongoGCPError } = require("mongodb");
// const { name } = require("ejs");

const customerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
});
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
});

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        startDate: String,
        endDate: String,
        description: String,
        customerInfor: customerSchema,
        usersInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
        leader: userSchema,
        tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "task" }],
    },
    {
        timestamps: true,
    }
);

const project = mongoose.model("project", projectSchema);

module.exports = { project };
