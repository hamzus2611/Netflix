const List = require("../models/List")


// CREATE
exports.creatlist =async(req,res)=>{

    if(req.user.isAdmin){
        const newList = await List(req.body);
        try {
            await newList.save();
            res.status(200).json(newList)
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You are not allowed!!");
    }
    
}

//DELETE
exports.deletelist =async(req,res)=>{

    if(req.user.isAdmin){
        try {
        await List.findByIdAndDelete(req.params.id);
        res.status(201).json("the list has been delete...")
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You are not allowed!!");
    }
    
}

//GET

exports.getlist = async(req,res)=>{
    const typeQuery=req.query.type;
    const genreQuery = req.query.genre;
    let list =[];
    try {
        if(typeQuery){
            if(genreQuery){
                list = await List.aggregate([
                    {$sample: {size : 10}},
                    {$match : {type:typeQuery , genre:genreQuery}},
                ])
            }else{
                list = await List.aggregate([
                    {$sample: {size : 10}},
                    {$match : {type:typeQuery }},
                ])
            }
        }else{
            list= await List.aggregate([{$sample : {size : 10 }}])
        }
        res.status(200).json(list)

    } catch (error) {
        res.status(500).json(error)
    }


}