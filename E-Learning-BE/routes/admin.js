const express = require('express');
const adminMiddleware = require('../middlewares/admin');
const {Admin}= require('../db/index');
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
module.exports = router;