const express = require('express');
const app = express();
const port = 3000;
const z=require('zod');

const userSchema = z.object({
    name: z.string(),
    // age: z.number().min(18),
    // email: z.string().email(),
})
   
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.post('/',(req,res)=>{
    const user = req.body;
    const response=userSchema.safeParse(user);
    if(!user.success){
        res.status(411).json({
            msg: 'Invalid'
        });
    }else{
        res.json(user);
    }
    
})

app.listen(port);