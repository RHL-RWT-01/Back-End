const express = require('express');
const adminMiddleware = require('../middlewares/admin');
const {Admin,Course}= require('../db/index');
const router =express.Router();

router.post('/signup',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    Admin.create({
        username: username,
        password: password
    })
    .then(()=>{
        res.json({
            message: 'Admin created successfully'
        })
    
    })
    .catch((err)=>{
        res.status(400).json({
            error: err.message
        })
    })
})

router.post('/courses',adminMiddleware, async (req, res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const course = await new Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    res.json({
        message: 'Course created successfully',
        course: course
    })
})

router.get('/courses',adminMiddleware, async (req, res)=>{
    const courses = await Course.find({});
    res.json({
        courses: courses
    })
});

module.exports = router;