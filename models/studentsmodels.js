const joi = require('joi')
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : {type : String, required : true, minlength: 3, maxlength: 30},
    birthdate : {type : String, required : true},
    PhoneNo : {type : String, required : true, minlength : 10, maxlength : 10},
    Branch : {type : String, required : true},
    USN : {type : String, required : true}
})

const Student = new mongoose.model('Student', studentSchema)

function validateData(Student){
    const schema = {
        name : joi.string().min(3).required(),
        birthdate : joi.string().min(1).required(),
        PhoneNo : joi.string().min(10).max(10).required(),
        Branch : joi.string().min(1).required(),
        USN : joi.string().min(10).required()
    }
    return joi.validate(Student, schema)
}

exports.Student = Student
exports.validateData = validateData