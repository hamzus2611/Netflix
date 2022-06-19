const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    profilePic: { type: String, default: "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg" },
    isAdmin: { type: Boolean, default: false }

}, { timestamps: true });
module.exports = mongoose.model("User", UserSchema)