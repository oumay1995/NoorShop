// import express 
const express = require('express')

//import mongoose
const mongoose = require('mongoose')

// import multer 
const multer = require('multer')

//import  model Categorie
const Categorie = require('./models/categorie');

const  bodyParser = require('body-parser');
const { addParseSpanInfo } = require('@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics');

const path = require('path');

//create instance of express in app
const app = express()


// Security Configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

//Connect to database
mongoose.connect('mongodb://localhost:27017/NoorShop', { useNewUrlParser: true, useUnifiedTopology: true });

//Integration bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join('backend/images')))

    const MIME_TYPE = {
        'image/png': 'png',
        'image/jpeg': 'jpg',
        'image/jpg': 'jpg'
    }
    const storage = multer.diskStorage({
        // destination
        destination: (req, file, cb) => {
            const isValid = MIME_TYPE[file.mimetype];
            let error = new Error("Mime type is invalid");
            if (isValid) {
            error = null;
            }
            //Affecter la destination
            cb(null, 'backend/images')
        },
        //file name
        filename: (req, file, cb) => {
            const name = file.originalname.toLowerCase().split('').join('-');
            const extension = MIME_TYPE[file.mimetype];
            const imgName = name + '-' + Date.now() + '-crococoder-' +
            '.' + extension;
            //Affecter file name
            cb(null, imgName);
        }
    });

//create categorie
app.post("/api/categories",multer({ storage: storage}).single('img'), (req,res)=>{
    console.log("here in create categories",req.body);
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    let categorie = new Categorie({
        categorieName    : req.body.categorieName,
        img: url + '/images/' + req.file.filename

    })
    //sauvgarde
    categorie.save();
    //send response
    res.status(200).json({
        message : "categories created with success"
    })
})

//get categorie
app.get("/api/categories",(req,res)=>{
    Categorie.find((err,docs)=>{
        if(err){
            console.log("error in DB");
        }else{
            res.status(200).json({
                categories : docs
            })
        }
    })
})

//get categorie by id
app.get("/api/categories/:id",(req,res)=>{
    console.log("here in get categorie by id");
    let id = req.params.id
    Categorie.findOne({_id : id}).then((doc)=>{
        if(doc){
            res.status(200).json({
                categorie : doc
            })
        }else{
            console.log("error in DB");
        }
    })
})

//update categorie 
app.put("/api/categories/:id",(req,res)=>{
    let id = req.params.id;
    let categorie = {
        _id             : req.body._id,
        categorieName   : req.body.categorieName
    }
    console.log("updated categorie",categorie);
    Categorie.updateOne({_id : req.params.id},categorie).then(
        (result)=>{
            res.status(200).json({
                message : "categorie updated with success"
            })
        }
    )
})

//delete categorie
app.delete("/api/categories/:id",(req,res)=>{
    console.log("here in delete categorie");
    let id = req.params.id;
    Categorie.deleteOne({_id : id}).then(
        (result)=>{
            if(result){
                res.status(200).json({
                    message : "categorie deleted with success"
                })
            }
        }
    )
})

//export app (dima ekhir ligne fil fichier)
module.exports = app;