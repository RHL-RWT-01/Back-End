const express = require('express');
const app = express();

app.use(express.json()); 
app.get('/', (req, res) => {
    res.send('Hello, World!........');
});

const person = {
    name: "Rahul",
    age: 20,
    city: "Indore",
};

app.get('/initial', (req, res) => {
    res.send(`Initial Page - Name: ${person.name}`);
});

app.get('/age', (req, res) => {
    res.send(`Initial Page - Name: ${person.age}`);
});

app.post('/update', (req, res) => {
    const newName = req.body.name; 
    if (newName) {
        person.name = newName;
        res.send('Name updated successfully');
    } else {
        res.status(400).send('Name is required');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
