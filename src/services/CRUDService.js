const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.query(`select * from Users`);
    return results;
    // console.log("check results", results);
};
const getUserById = async (userId) => {
    let [results, fields] = await connection.query(
        "select * from Users where id = ?",
        userId
    );

    let user = results && results.length > 0 ? results[0] : {};
    return user
}
const updateUserById =async (email,name,city,userId) => {
    let sql = `UPDATE Users SET email = ?, name= ?,city =? WHERE id =?`;
    let [results, fields] = await connection.query(sql, [
        email,
        name,
        city,
        userId,
    ]);
}
const deleteUserById =async (id) =>{
    let sql ='DELETE FROM Users WHERE id = ? ';
    let[results,fields] = await connection.query(sql,[id]);
}
module.exports = {
    getAllUsers,getUserById,updateUserById,deleteUserById
};
