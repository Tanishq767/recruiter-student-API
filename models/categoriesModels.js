const joi = require('joi')
const mongoose = require('mongoose')

function validateData(category){
    const schema = {
        name : joi.string().min(3).required()
    }
    return joi.validate(category, schema)
}

const categorySchema = new mongoose.Schema({
    name : {type : String, required : true, minlength: 3}
})

const Category = new mongoose.model('Category', categorySchema)

exports.Category = Category
exports.categorySchema = categorySchema
exports.validateData = validateData