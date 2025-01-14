const express = require('express');
const userMiddleware = require('../middlewares/user');
const {User}= require('../db/index');
const router =express.Router();

router.post('/signup',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    User.create({
        username: username,
        password: password
    })
    .then(()=>{
        res.json({
            message: 'User created successfully'
        })
    
    })
    .catch((err)=>{
        res.status(400).json({
            error: err.message
        })
    })
})

app.get('/courses',userMiddleware,async (req,res)=>{
    courses = await Course.find({});
    res.json({
        courses: courses
    })
})

module.exports = router;