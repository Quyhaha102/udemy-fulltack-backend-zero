const { Customer } = require("../models/customer");

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create(customerData);
        return result;
    } catch (error) {
        console.log("check error:", error);
    }
};
const createArrayCustomerService = async (array) => {
    try {
        let result = await Customer.insertMany(array);
        return result;
    } catch (error) {
        console.log("check error:", error);
        return null;
    }
};
const getAllCustomerService = async (limit, page, name) => {
    try {
        let result = {};
        if (limit && page) {
            let offset = (page - 1) * limit;
            if (name) {
                result = await Customer.find({
                    name: { $regex: ".*" + name + ".*" },
                })
                    .skip(offset)
                    .limit(limit)
                    .exec();
                return result;
            } else {
                result = await Customer.find({})
                    .skip(offset)
                    .limit(limit)
                    .exec();
                return result;
            }
        } else {
            result = await Customer.find({});
            return result;
        }
    } catch (error) {
        console.log("check error:", error);
        return null;
    }
};
const updateSingleCustomerService = async (data) => {
    try {
        let result = await Customer.updateOne(
            { _id: data.id },
            { name: data.name, address: data.address, email: data.email }
        );
        return result;
    } catch (error) {
        console.log("check error:", error);
        return null;
    }
};
const deleteACustomerService = async (id) => {
    try {
        let result = await Customer.deleteById(id);
        // let result = await Customer.restore({ id: id });
        return result;
    } catch (error) {
        console.log("check error:", error);
        return null;
    }
};
const deleteArrayCustomerService = async (array) => {
    try {
        let result = await Customer.delete({ _id: { $in: array } });
        return result;
    } catch (error) {
        console.log("check error:", error);
        return null;
    }
};
module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomerService,
    updateSingleCustomerService,
    deleteACustomerService,
    deleteArrayCustomerService,
};
