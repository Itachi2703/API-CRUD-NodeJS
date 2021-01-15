const express = require("express");
const router = express.Router();
const Personal_Schema = require("../models/model")

//Gets

router.get("/", async (req, res) => {
    try{
        const Post_user = await Personal_Schema.find()
        res.json(Post_user)
    }catch(err){
        res.json({"message": err})
    }
});

router.get("/:userID", async (req, res) => {
    try{
        const post_one_user = await Personal_Schema.findById(req.params.userID)
        res.json(post_one_user)
    }catch(err){
        res.json({"message": err})
    }
})
//Posts



//files end

router.post("/", async (req, res) =>{
    //Post

    const add_post = new Personal_Schema({
        Name: req.body.Name,
        LastName: req.body.LastName,
        Age: req.body.Age,
        country: req.body.country,
        Adress: req.body.Adress,
        Jobs: req.body.Jobs

    });
    try{
        const add_post_now = await add_post.save()
        res.json(add_post_now)
    }catch(err){
        res.json({"mesagge": err})
    }

    //End post
})


//Deletes
router.delete("/:userID", async (req, res) => {
    try{
        const delet_user = await Personal_Schema.remove({_id: req.params.userID})
        res.json(delet_user)
    }catch(err){
        res.json({"message": err})
    }
})
//Patchs
router.patch("/:upID", async (req, res) => {

    try{
        const updATE = await Personal_Schema.updateOne({_id: req.params.upID}, {$set: {
            Name: req.body.Name,
            LastName: req.body.LastName,
            Age: req.body.Age,
            country: req.body.country,
            Adress: req.body.Adress,
            Jobs: req.body.Jobs
            
        }})
        res.json(updATE)
    }catch(err){
        res.json({"message": err})
    }
})


module.exports = router;