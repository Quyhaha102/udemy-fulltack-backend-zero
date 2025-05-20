const { User } = require("../models/user");
const {uploadMultipleFiles,uploadSingleFile} = require("../services/fileService")


const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
};
const postCreateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let user = await User.create({
        email,
        name,
        city,
    });
    return res.status(200).json({
        errorCode: 0,
        data: user,
    });

};
const putUpdateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;

    // await updateUserById(email, name, city, userId);
    let user = await User.updateOne({ userId: userId }, { city, name, email });
    return res.status(200).json({   
        errorCode: 0,
        data: user,
    });
};
const deleteUserAPI = async (req, res) => {
    const id = req.body.userId;
    let results = await User.deleteOne({_id:id}).exec();

    return res.status(200).json({   
        errorCode: 0,
        data: results,
    });
};

const postUploadMultipleFileApi = async (req,res)  =>{
    
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    
    if (Array.isArray(req.files.image)){
        let results = await uploadMultipleFiles(req.files.image)
        return res.status(200).json({
            EC:0,
            data:results
        })
    }else {
        return await uploadSingleFile(req.files.image)
    }

    

    res.send('ok single')
    
}


module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadMultipleFileApi
};
