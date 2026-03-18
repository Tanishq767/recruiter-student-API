const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : {type : String, required : true, minlength: 3, maxlength: 30},
    birthdate : {type : String, required : true},
    PhoneNo : {type : String, required : true, minlength : 10, maxlength : 10},
    Branch : {type : String, required : true},
    USN : {type : String, required : true},
    CGPA : {type : Number, required : true},
    resumeScore : {type : Number, required : true},
    hackathons : {type : Number, required : true},
    projects : {type : Number, required : true}
})

const Student = new mongoose.model('Student', studentSchema)

exports.Student = Student