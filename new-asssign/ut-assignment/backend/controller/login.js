const { UserModel } = require("../models/login.models");

const register = async (req, res) => {
    const {name , password} = req.body;
    try {
        const user = await UserModel.findOne({ name });
        if (user) {
            res.status(200).json({ "Message": `User ${name} is already register` });
            return;
        }

        const newuser = new UserModel({
            name, 
            password
        });
        await newuser.save();
        res.status(200).json({ "Message": `User ${name} register successfully` })
    } catch (error) {
        res.status(500).json({ "Error": error.message })
    }
}

const login = async (req, res) => {
    const { name , password } = req.body;
    try {
        const user = await UserModel.findOne({ name });
        if (!user) {
            res.status(200).json({ "msg": "User not found" })
        }
        else if (user.password == password ) {
            res.status(200).json({ "msg": "Login successfull" })
        }
        else{
              res.status(200).json({"msg":"Password not correct"})
        }
    } catch (error) {
        res.status(500).json({ "Error": error.message })
    }

}



module.exports = {

    login, 
    register


}