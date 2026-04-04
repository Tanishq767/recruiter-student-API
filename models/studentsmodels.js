const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : {type : String, required : true, minlength: 3, maxlength: 30},
    USN : {type : String, required : true},
    birthdate : {type : String, required : false},
    PhoneNo : {type : String, required : false, minlength : 10, maxlength : 10},
    Branch : {type : String, required : true},
    year: { type: Number, required: true },
    CGPA : {type : Number, required : true},
    resumeScore : {type : Number, required : true},
    hackathons : {type : Number, required : true},
    projects : {type : Number, required : true}
})

const Student = new mongoose.model('Student', studentSchema)

exports.Student = Student