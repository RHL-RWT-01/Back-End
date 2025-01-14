const express = require('express');
const userMiddleware = require('../middlewares/user');
const {User,Course}= require('../db/index');
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

router.get('/courses',async (req,res)=>{
    courses = await Course.find({});
    res.json({
        courses: courses
    })
})

router.post('/courses:courseId',userMiddleware,(req,res)=>{
    const courseId=req.params.courseId;
    const username = req.headers.username;
User.updateOne({
    username: username
}
,{
 purchasedCourses:{
    "$push":courseId
 }
})
})


router.get('/purchasedCourses',userMiddleware,async(req,res)=>{
    const username = req.headers.username;
    const purchasedCourses = await User.findOne({
        username: username
    })
    .populate('purchasedCourses')
    res.json({
        purchasedCourses: purchasedCourses
    })
})

module.exports = router;