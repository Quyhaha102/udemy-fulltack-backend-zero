const path = require("path");

const uploadSingleFile = async (fileObject) => {
    let uploadPath = path.join(__dirname, "../public/images/upload/");
    //get image extension
    let extName = path.extname(fileObject.name);
    //get file'name without extension
    let baseName = path.basename(fileObject.name, extName);
    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}${finalName}`;

    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(finalPath);
        // console.log("check dirname", uploadPath);

        return {
            status: "success",
            path: finalName,
            error: null,
        };
    } catch (error) {
        // console.log("check dirname", uploadPath);
        return {
            status: "failed",
            path: null,
            error: JSON.stringify(error),
        };
    }
};

const uploadMultipleFiles = async (fileArray) => {
    for (let i = 0; i < fileArray.length; i++) {
        let uploadPath = path.join(__dirname, "../public/images/upload/");
        //get image extension
        let extName = path.extname(fileArray[i].name);
        //get file'name without extension
        let baseName = path.basename(fileArray[i].name, extName);
        let finalName = `${baseName}-${Date.now()}${extName}`;
        let finalPath = `${uploadPath}${finalName}`;

        // Use the mv() method to place the file somewhere on your server
        try {
            await fileArray[i].mv(finalPath);
            console.log({
                status: "success",
                path: finalName,
                error: null,
            });
        } catch (error) {
            console.log({
                status: "failed",
                path: null,
                error: JSON.stringify(error),
            });
        }
    }
};

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles,
};
