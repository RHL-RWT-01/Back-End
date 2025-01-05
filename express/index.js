
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!........');
});

app.get('initial',(req, res) =>{
    const name = req.query.name;
    res.send('Initial Page', name);
})

const port = 3001;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
