const express = require('express');
const app = express();

// Middleware
app.use(express.json());
const port=3000;

app.get('/sum',(req,res)=>{
    const {a,b} = req.query;
    if(a && b){
        res.send({result:parseInt(a)+parseInt(b)});
    }else{
        res.status(400).send('Please provide both a and b as query parameters');
    }
})

app.get('interest',(req,res)=>{
    const {principal,time,rate} = req.query;
    if(principal && time && rate){
        res.send({result:(principal*time*rate)/100});
    }else{
        res.status(400).send('Please provide all parameters: principal, time, and rate');
    }
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});