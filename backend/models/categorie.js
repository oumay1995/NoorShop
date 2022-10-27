//import mongoose
const mongoose = require('mongoose')

//generate Schema
const categorieSchema = mongoose.Schema({
    categorieName    : String,
    img : String
})

//generate model 
const categorie = mongoose.model('Categorie',categorieSchema);
//export model 
module.exports = categorie;