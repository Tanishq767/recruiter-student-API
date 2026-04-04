const express = require('express')
const router = express.Router();
const validateStudent = require('../middlewares/validateStudent');
const studentController = require('../controllers/studentcontroller')

router.get('/', studentController.getStudent)

router.post('/', 
    studentController.createStudent); //creates a new resource

router.get('/usn/:usn', studentController.getStudentbyUSN);

router.get('/top/global/:metric', studentController.getGlobalTopByMetric);

const upload = require('../middlewares/upload'); //imports the multer function from middleware
const {uploadStudents} = require('../controllers/studentcontroller'); 

router.post('/upload', upload.single('file'), uploadStudents); //multer middleware runs first, finally, the file is attached to request (req.file)

module.exports = router