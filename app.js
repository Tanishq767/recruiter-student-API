const express = require('express')
const categories = require('./routes/categories')
const cors = require('cors')
const app = express()
const mongoose  = require('mongoose')
const students = require('./routes/students')
const courses = require('./routes/Courses')

mongoose.connect('mongodb://127.0.0.1/mydb')
.then(() => console.log('Connection is successful'))
.catch(err => console.error('Couldnt connect to mongoDB', err))

app.use(cors())
app.use(express.json())
app.use(categories)
app.use('/api/students', students)
app.use('/api/courses', courses)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected (event)');
});

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});