
const router = require('express').Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");

const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const config = require('config')
const jwtPrivatekey = config.get('jwtPrivatekey')
//UPDATE
exports.updateuser = async (req, res) => {
    // if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, saltRounds)

    }
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        return res.status(200).json(updateUser)
    } catch (error) {
        return res.status(500).json(error)
    }
    // }
    // else {
    //     return res.status(403).json("You can update only your account!")
    // }
}

//DELETE

exports.deleteuser = async (req, res) => {
    // if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, saltRounds)
    }
    try {
        await User.findByIdAndDelete(req.params.id, { $set: req.body }, { new: true })
        return res.status(200).json("user has been deleted...")
    } catch (error) {
        return res.status(500).json(error)
    }
    // }
    // else {
    //     return res.status(403).json("You can delete only your account!")
    // }
}
//GET

exports.getuser = async (req, res) => {


    try {
        const user = await User.findById(req.params.id)
        const { password, ...info } = user._doc
        return res.status(200).json(info)
    } catch (error) {
        return res.status(500).json(error)
    }

}
//GET ALL
exports.getalluser = async (req, res) => {
    const query = req.query.new;
    // if (req.user.isAdmin) {

    try {
        const users = query ? await User.find().limit(10) : await User.find();
        //let { password, ...infos } = users._doc
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(error)
    }

    // } else {
    //     return res.status(403).json("You are not allowed to see all users!")
    // }
}

//GET USER STATS
exports.getstat = async (req, res) => {
    const today = new Date();
    const letYears = today.setFullYear(today.setFullYear() - 1);
    const monthsArray = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" }
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },

            },
        ]);
        return res.send(data)
    } catch (error) {
        return res.status(500).json(error)
    }


}


exports.getalluser = async (req, res) => {
    const query = req.query.new;
    try {
        const users = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();
        res.send(users)
    } catch (error) {
        res.status(500).json(error)
    }
}