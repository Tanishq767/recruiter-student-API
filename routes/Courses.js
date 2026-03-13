const { Course, validateDataCourse } = require('../models/courseModel');
const express = require('express');
const router = express.Router();
const {categorySchema} = require('../models/categoriesModels')

router.get('/', async (req, res) => {
    const courses = await Course.find();
    res.send(courses);
});

router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (!course)
        return res.status(404).send('Course not found');

    res.send(course);
});

router.post('/', async (req, res) => {

    const { error } = validateDataCourse(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);

    let course = new Course({
        name: req.body.name,
        category: req.body.category,
        launch_date: req.body.launch_date,
        CourseID: req.body.CourseID,
        Eligible_Branches: req.body.Eligible_Branches,
        coordinator: req.body.coordinator
    });

    course = await course.save();

    res.send(course);
});

router.put('/:id', async (req, res) => {

    const { error } = validateDataCourse(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);

    const course = await Course.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            category: req.body.category,
            launch_date: req.body.launch_date,
            CourseID: req.body.CourseID,
            Eligible_Branches: req.body.Eligible_Branches,
            coordinator: req.body.coordinator
        },
        { new: true }
    );

    if (!course)
        return res.status(404).send('Course not found');

    res.send(course);
});


router.delete('/:id', async (req, res) => {

    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course)
        return res.status(404).send('Course not found');

    res.send(course);
});


module.exports = router;
