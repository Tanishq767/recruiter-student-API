const Student = require('../models/studentsmodels')

exports.createStudent = async(req,res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (err){
        res.status(400).send(err.message);
    }
};

exports.getStudent = async(req,res) => {
    try{
        const students = await Student.find();
        res.send(students);
    } catch(err){
        res.status(500).send(err.message);
    }
};