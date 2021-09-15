
const router = require('express').Router();
const Movie = require("../models/Movie");
const CryptoJs = require("crypto-js");

const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const config = require('config');
const { findById } = require('../models/Movie');
const jwtPrivatekey = config.get('jwtPrivatekey')

//create
exports.createMovie = async (req, res) => {
    if (req.user.isAdmin) {
        //const { title, desc, img, imgTiltle, imgSm, trailer, video, year, limit, genre, isSeries } = req.bpdy;
        try {
            let newMovie =await new Movie(req.body)
            newMovie.save();
            res.status(200).json(newMovie)
        } catch (error) {
            res.status(400).json(error)
        }
    }else{
        res.status(403).json("You are not allowed!!")
    }
}
// DELETE
exports.deleteMovie = async(req,res)=>{

    if(req.user.isAdmin){
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("the movie has been deleted...")
        } catch (error) {
            res.status(400).json(error)
        }
    }else{
        res.status(403).json("You are not Allowed!!")
    }
}
//UPDATE
exports.updatemovie = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updateMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updateMovie)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("You are not Allowed!")
    }
}

//GET
exports.getMovie =async(req,res)=>{
    try {
        let movie= await Movie.findById(req.params.id);
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET RANDOM

exports.getMovieRundom = async(req,res)=>{
    console.log(req.query.type)
    const type = req.query.type;
    let movie;
    try {
        if(type==="series"){
            movie = await Movie.aggregate([
                {$match : {isSeries : true}},
                {$sample : {size : 1}},
            ])
        }else{
            movie = await Movie.aggregate([
                {$match : {isSeries : false}},
                {$sample : {size : 1}},
            ])
        }
        res.status(200).json(movie)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


//GET ALL
exports.getAllMovie = async(req,res)=>{

    if(req.user.isAdmin){
        try {
            let movies = await (await Movie.find()).reverse();
            res.status(200).json(movies)
        } catch (error) {
            res.status(400).json(error)
        }
    }else{
        res.status(403).json("You are not Allowed!!")
    }
}