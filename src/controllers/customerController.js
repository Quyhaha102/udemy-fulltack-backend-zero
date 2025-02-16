const { uploadSingleFile } = require("../services/fileService");
const {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomerService,
    updateSingleCustomerService,
    deleteACustomerService,
    deleteArrayCustomerService,
} = require("../services/customerService");

module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;

        let imageUrl = "";

        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let results = await uploadSingleFile(req.files.image);
            imageUrl = results.path;
            console.log("check imageUrl:", imageUrl);
        }

        const data = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl,
        };

        let customer = await createCustomerService(data);

        return res.status(200).json({
            EC: 0,
            data: customer,
        });
    },

    postCreateArrayCustomer: async (req, res) => {
        let array = req.body.customer;
        let customers = await createArrayCustomerService(array);
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers,
            });
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers,
            });
        }
    },
    getAllCustomers: async (req, res) => {
        const limit = req.query.limit;
        const page = req.query.page;
        const name = req.query.name
        const address = req.query.address
        
        let customer = await getAllCustomerService(limit, page,name,address);
        return res.status(200).json({
            EC: 1,
            data: customer,
        });
    },

    updateSingleCustomer: async (req, res) => {
        let { id, name, address, email } = req.body;
        const data = {
            id,
            name,
            address,
            email,
        };

        let result = await updateSingleCustomerService(data);

        return res.status(200).json({
            EC: 1,
            data: result,
        });
    },

    deleteACustomer: async (req, res) => {
        let id = req.body.id;
        let result = await deleteACustomerService(id);

        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
    deleteArrayCustomer: async (req, res) => {
        let array = req.body.customer;
        console.log("check array:", array);
        let result = await deleteArrayCustomerService(array);

        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
};
