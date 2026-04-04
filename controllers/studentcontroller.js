const {Student} = require('../models/studentsmodels')
const csv = require('csv-parser')
const fs = require('fs')

const createStudent = async(req,res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (err){
        res.status(400).send(err.message);
    }
};

const getStudent = async(req,res) => {
    try{
        const students = await Student.find();
        res.send(students);
    } catch(err){
        res.status(500).send(err.message);
    }
};

const getStudentbyUSN = async(req,res) => {
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

const getGlobalTopByMetric = async (req,res) => {
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

const uploadStudents = async(req,res) => {
        const results = []

        fs.createReadStream(req.file.path) //creates a stream of chunk by dividing the file, efficient for large files
        .pipe(csv()) // parses csv into json
        .on('data', (data) => { // 'data' is an event which occurs when a chunk of file is read and parsed, ie ready to be used
            results.push({
                name: data.name,
                USN: data.USN,
                Branch: data.Branch,
                CGPA: Number(data.CGPA),
                projects: Number(data.projects),
                hackathons: Number(data.hackathons),
                resumeScore: Number(data.resumeScore),
                year: Number(data.year)
            });
        })
        .on('end', async () => {
            try{
                await Student.insertMany(results);
                fs.unlink(req.file.path, () => {}); //unlink requires a callback, so we give it one, its empty tho
                res.json({message : "Students uploaded succesfully"})
            } catch (err) {
                res.status(500).json({error : err.message})
            }
        })
    }

module.exports = {
    createStudent,
    getStudent,
    getStudentbyUSN,
    getGlobalTopByMetric,
    uploadStudents,
};