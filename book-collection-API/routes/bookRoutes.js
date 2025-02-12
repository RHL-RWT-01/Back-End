const express = require('express');
const router=express.Router();
const vaidate=require('../middlewares/validate');
const bookSchema = require('../schemas/bookSchema');

let books=[];

router.post('/',validate(bookSchema),(req,res)=>{
    const book={id:books.length+1,...requestAnimationFrame.body};
    books.push(book);
    res.status(201).json(book);
});

router.get('/',(req,res)=>{
    res.json(books);
});

module.exports = router;