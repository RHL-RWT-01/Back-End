const express = require('express');

const app=express();

const port=3000;
app.use(express.json());

let tasks = [];

app.get('/', (req, res) => {
    res.send('Hello, World!........');
})

app.get('/tasks', (req, res) => {
    res.send(tasks);
});

app.post('/tasks', (req, res) => {
    const {title, description} = req.body;
    const newTask = {id: tasks.length + 1, title, description};
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const {id} = req.params;
    const {title, description} = req.body;
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

    if(task){
        tasks[taskIndex] = {...tasks[taskIndex], title, description};
        res.json(tasks[taskIndex]);
    }else{
        res.status(404).send('Task not found');
    }
});

app.delete('/tasks/:id', (req, res) => {
    const {id} = req.params;
    tasks=tasks.filter(task => task.id !== parseInt(id));
    res.json({
        msg: 'Task deleted successfully'
    })
})

app.listen(port, () => console.log(`Server running on port ${port}`));
