const express = require('express')
const router = express.Router()

const {Category, validateData} = require('../models/categoriesModels.js')

router.get('/api/categories', async(req,res) => {
    const categories = await Category.find()
    res.send(categories);
}) //defines what if a get request is sent by user, this particular fn is kinda informal as we mever send the whole database to the client

router.post('/api/categories', async(req,res) => {
    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const category = new Category({
        name : req.body.name
    })
    await category.save()
    res.send(category)
}); //creates a new resource

router.put('/api/categories/:id', async(req,res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, {name : req.body.name}, {new : true})
    if(!category) return res.status(404).send('Given Category not found');

    const { error } = validateData(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    res.send(category);
}) //updates already existing resource, the :id is to keep the part after categories as variable, anything is accepted, no rigid path

// router.delete('/api/categories/:id', (req,res) =>{
//     const category = categories.find(c => c.id === parseInt(req.params.id));
//     if(!category) return res.status(404).send('No such category');

//     const index = categories.indexOf(category);
//     categories.splice(index, 1); 
// }) //deletes by id

module.exports = router