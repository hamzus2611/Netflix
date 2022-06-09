const List = require("../models/List")


// CREATE
exports.creatlist = async (req, res) => {

    // if (req.user.isAdmin) {
    const newList = await List(req.body);
    try {
        await newList.save();
        return res.send(newList)
    } catch (error) {
        return res.status(501).json(error)
    }
    // } else {
    // return res.status(403).json("You are not allowed!!");
    // }

}

//DELETE
exports.deletelist = async (req, res) => {

    // if (req.user.isAdmin) {
    try {
        await List.findByIdAndDelete(req.params.id);
        return res.status(201).json("the list has been delete...")
    } catch (error) {
        return res.status(500).json(error)
    }
    // } else {
    // return res.status(403).json("You are not allowed!!");
    // }

}

//GET

exports.getlist = async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ])
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } },
                ])
            }
        } else {
            list = await List.aggregate([{ $sample: { size: 10 } }])
        }
        return res.send(list)

    } catch (error) {
        return res.status(500).json(error)
    }


}