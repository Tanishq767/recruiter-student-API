const {Student} = require('../models/studentsmodels')

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

exports.getStudentbyUSN = async(req,res) => {
    try{
        const student = await Student.findOne({USN : req.params.usn});

        if(!student){
            return res.status(404).send("student not found");
        }

        res.send(student);
    }catch(err){
        res.status(500).send(err.message);
    }
};

exports.getGlobalTopByMetric = async (req,res) => {
    try{
        const metric = req.params.metric
        const allowedMetrics = [
            "CGPA",
            "resumeScore",
            "hackathons",
            "projects"
        ]

        if(!allowedMetrics.includes(metric)){
            return res.status(400).send("Invalid metric")
        }

        const students = await Student.find()
        students.sort((a,b)=> b[metric] - a[metric])
        const topCount = Math.ceil(students.length * 0.10)
        const topStudents = students.slice(0, topCount)

        res.send(topStudents)

    }
    catch(err){
        res.status(500).send(err.message)
    }

}