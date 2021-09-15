const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({

    title: { type: String, required: true },
    desc: { type: String },
    img: { type: String },
    imgTiltle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries:{type: Boolean , default: false}

}, { timestamps: true });
module.exports = mongoose.model("Movie", MovieSchema)