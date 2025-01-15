require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const express = require('express');
const adminMiddleware = require('../middlewares/admin');
const {Admin,Course}= require('../db/index');
const router =express.Router();
const jwt = require('jsonwebtoken');

router.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
   
    const isUserExist = Admin.findOne({username: username, password: password});

    if(isUserExist){
        const token = jwt.sign({username: username}, JWT_SECRET);
        res.json({
            message: 'Admin signed in successfully',
            token: token
        })
    }else{
        res.status(401).json({
            message: 'Admin not found'
        })
    }
})

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

router.post('/courses',adminMiddleware,  (req, res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const course =  Course.create({
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