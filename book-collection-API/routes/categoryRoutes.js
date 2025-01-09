const express = require('express');
const router = express.Router();
const validate=require('../middlewares/validate');
const categorySchema = require('../schemas/categorySchema');

let category=[];

router.post('/',validate(categorySchema),(req,res)=>{
    const category={id:categories.length+1,...req.body};
    categories.push(category);
    res.status(201).json(category);
});

router.get('/',(req,res)=>{
    res.json(categories);
});

module.exports=router;