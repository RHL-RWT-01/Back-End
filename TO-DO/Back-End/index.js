const express = require('express');
const {todoSchema} = require('./types');
const {Todo}=require('./db');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/todo',(req,res)=>{
    const todo = req.body;
    const result = todoSchema.parse(todo);
    if(result.success){
        Todo.create({
            title:todo.title,
            description:todo.description,
        })
        res.json({
            message: 'Todo created successfully',
        }); 
    }else{
        res.status(400).json({
            message: 'Invalid data',
        });
    }

})

app.get('/todos',(req,res)=>{

})

app.put('/completed',(req,res)=>{

})

app.listen((port) => {
    console.log(`Server is running at http://localhost:${port}`)
})