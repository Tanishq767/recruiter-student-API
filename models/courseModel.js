const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 30 },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

    launch_date: { type: String, required: true },

    CourseID: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 8
    },

    Eligible_Branches: { type: String, required: true },

    coordinator: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    }
});

const Course = mongoose.model('Course', courseSchema);

exports.Course = Course;
