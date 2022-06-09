
const Movie = require("../models/Movie");
const CryptoJs = require("crypto-js");

const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const config = require('config');
const jwtPrivatekey = config.get('jwtPrivatekey')

//create
exports.createMovie = async (req, res) => {
    // if (req.user.isAdmin) {
    // const { title, desc, img, imgTiltle, imgSm, trailer, video, year, limit, genre, isSeries } = req.bpdy;
    try {
        let newMovie = await new Movie(req.body)
        // console.log(newMovie)
        await newMovie.save();
        return res.send(newMovie)
    } catch (error) {
        return res.status(400).json(error)
    }
    // } else {
    //     return res.status(403).json("You are not allowed!!")
    // }
}
// DELETE
exports.deleteMovie = async (req, res) => {

    // if (req.user.isAdmin) {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        return res.send.json("the movie has been deleted...")
    } catch (error) {
        return res.status(400).json(error)
    }
    // } else {
    //     return res.status(403).json("You are not Allowed!!")
    // }
}
//UPDATE
exports.updatemovie = async (req, res) => {
    // if (req.user.isAdmin) {
    try {
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        return res.send.json(updateMovie)
    } catch (error) {
        return res.status(500).json(error)
    }
    // }
    // else {
    //     return res.status(403).json("You are not Allowed!")
    // }
}

//GET
exports.getMovie = async (req, res) => {
    try {
        // console.log(req.params.id)
        let movie = await Movie.findById(req.params.id);
        return res.send(movie)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//GET RANDOM

exports.getMovieRundom = async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ])
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ])
        }
        return res.send(movie)
    } catch (error) {
        return res.status(500).json(error)
    }
}


//GET ALL
exports.getAllMovie = async (req, res) => {

    // if (req.user.isAdmin) {
    try {
        let movies = await Movie.find();
        // let movies = await (await Movie.find()).reverse();
        return res.send(movies)
    } catch (error) {
        return res.status(500).json(error)
    }
    // } else {
    //     return res.status(403).json("You are not Allowed!!")
    // }
}