const express = require('express');
const todoSchema = require('./types');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/todo',(req,res)=>{
    const todo = req.body;
    const result = todoSchema.parse(todo);
    

})

app.get('/todos',(req,res)=>{

})

app.put('/completed',(req,res)=>{

})

app.listen((port) => {
    console.log(`Server is running at http://localhost:${port}`)
})