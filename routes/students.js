const express = require('express')
const router = express.Router();
const validateStudent = require('../middlewares/validateStudent');
const studentController = require('../controllers/studentcontroller.js')

router.get('/', studentController.getStudent) //defines what if a get request is sent by user, this particular fn is kinda informal as we mever send the whole database to the client

router.post('/', studentController.createStudent); //creates a new resource

router.put('/:id', async(req,res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, {name : req.body.name, birthdate :req.body.birthdate, PhoneNo : req.body.PhoneNo, Branch : req.body.Branch, USN : req.body.USN}, {new : true})
    if(!student) return res.status(404).send('Given Category not found');

    const { error } = validateData(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    res.send(student);
}) //updates already existing resource, the :id is to keep the part after categories as variable, anything is accepted, no rigid path

router.delete('/api/students/:id', (req,res) =>{
    const student = Student.findByIdAndRemove(req.params.id);
    if(!student) return res.status(404).send('No such category');

    res.send(student)
}) //deletes by id

module.exports = router