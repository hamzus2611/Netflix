const User = require('../models/User')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const config = require('config')
const jwtPrivatekey = config.get('jwtPrivatekey')
exports.register = async (req, res) => {
    const { username, lastname, email, phone, profilePic } = req.body;
    try {
        let user = await User.findOne({ email }); 
        if (user) {
            return res.status(400).json("User is exists");
        }
        hash = await bcrypt.hash(req.body.password, saltRounds)
        let newUser = await new User({
            username, lastname, password:hash, email, phone, profilePic, isAdmin: false
        });

        newUser.password = hash;

        await newUser.save();

        const accessToken = jwt.sign({
            id: newUser._id, isAdmin: newUser.isAdmin
        }, jwtPrivatekey, { expiresIn: "7d" });
        const { password, ...info } = await newUser._doc;
        return res.send({ ...info, accessToken })
    } catch (error) {
        return res.status(500).json(error)

    }
}

exports.login = async (req, res) => {
    let { email } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json("wrong password or email")
        }
        const validpassword = await bcrypt.compare(req.body.password, user.password)
        if (!validpassword) { return res.status(401).json("wrong password or email") }
        const accessToken = jwt.sign({
            id: user._id, isAdmin: user.isAdmin
        }, jwtPrivatekey, { expiresIn: "7d" });
        const { password, ...info } = await user._doc;
        return res.send({ ...info, accessToken })
    } catch (error) {
        return res.status(500).json(error)
    }


}