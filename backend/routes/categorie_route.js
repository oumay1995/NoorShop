const express = require('express')
const router = express.Router();
//import  model Categorie
const Categorie = require('../models/categorie');

//create Categorie
router.post("/", (req,res)=>{
    console.log("here in create categorie",req.body);
    let categorie = new Categorie({    
        categorieName    : req.body.platName,
    })
    //sauvgarde
    categorie.save();
    //send response
    res.status(200).json({
        message : "categorie created with success"
    })
})