const mongoose = require('mongoose');
const {Student} = require('./models/studentsmodels');

mongoose.connect('mongodb://127.0.0.1:27017/mydb')
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));

async function seedStudents() {
  try {
    const students = [
            {
                name: "Arjun Mehta",
                birthdate: "2003-05-14",
                PhoneNo: "9876543210",
                Branch: "CSE",
                USN: "1MS23AD068",
                CGPA: 8.7,
                resumeScore: 78,
                hackathons: 2,
                projects: 4
            },
            {
                name: "Sneha Reddy",
                birthdate: "2002-11-22",
                PhoneNo: "9123456780",
                Branch: "ISE",
                USN: "1MS23AD065",
                CGPA: 9.1,
                resumeScore: 85,
                hackathons: 3,
                projects: 5
            },
            {
                name: "Rahul Sharma",
                birthdate: "2003-02-10",
                PhoneNo: "9988776655",
                Branch: "ECE",
                USN: "1MS23AD045",
                CGPA: 7.9,
                resumeScore: 70,
                hackathons: 1,
                projects: 3
            },
            {
                name: "Priya Nair",
                birthdate: "2002-08-30",
                PhoneNo: "9090909090",
                Branch: "CSE",
                USN: "1MS23AD034",
                CGPA: 8.5,
                resumeScore: 82,
                hackathons: 2,
                projects: 4
            },
            {
                name: "Karan Patel",
                birthdate: "2003-01-19",
                PhoneNo: "9345678123",
                Branch: "ME",
                USN: "1MS23AD056",
                CGPA: 7.2,
                resumeScore: 65,
                hackathons: 1,
                projects: 2
            },
            {
                name: "Aisha Khan",
                birthdate: "2002-12-05",
                PhoneNo: "9765432109",
                Branch: "CSE",
                USN: "1MS23AD021",
                CGPA: 9.3,
                resumeScore: 90,
                hackathons: 4,
                projects: 6
            },
            {
                name: "Vikram Singh",
                birthdate: "2003-06-25",
                PhoneNo: "9871234567",
                Branch: "EEE",
                USN: "1MS23AD015",
                CGPA: 7.8,
                resumeScore: 72,
                hackathons: 2,
                projects: 3
            },
            {
                name: "Neha Joshi",
                birthdate: "2002-09-17",
                PhoneNo: "9012345678",
                Branch: "ISE",
                USN: "1MS23AD052",
                CGPA: 8.9,
                resumeScore: 88,
                hackathons: 3,
                projects: 5
            },
            {
                name: "Rohit Das",
                birthdate: "2003-03-11",
                PhoneNo: "9898989898",
                Branch: "CSE",
                USN: "1MS23AD049",
                CGPA: 8.1,
                resumeScore: 75,
                hackathons: 2,
                projects: 4
            },
            {
                name: "Ananya Gupta",
                birthdate: "2002-07-29",
                PhoneNo: "9123987654",
                Branch: "ECE",
                USN: "1MS23AD047",
                CGPA: 9.0,
                resumeScore: 87,
                hackathons: 3,
                projects: 5
            }
    ];

    const result = await Student.insertMany(students);
    console.log("Inserted:", result.length, "students");
  } catch (err) {
    console.log(err);
  }
}

seedStudents();