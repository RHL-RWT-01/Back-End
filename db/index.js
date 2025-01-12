const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const secretKey="473551";
const app = express();
app.use(express.json());

// Connecting to MongoDB
mongoose.connect('connection string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Create User model directly
const User = mongoose.model('User', {
  name: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, unique: true, required: true }
});

// POST route to add a user
app.post('/signup', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



app.post('/signin',async (req,res)=>{
    const {username,password}= req.body;
    const user = await User.findOne({ username: username,password: password });
    if(!user){
        return res.status(400).json({error:"User not found"});
    }
    // compare the entered password with the stored password
    const token=jwt.sign({username},secretKey)
    if(user.password === password){
        res.status(200).json({message:"Signin successful",
          token:token
         });
    }else{
        return res.status(400).json({error:"Invalid password"});
    }
})

app.get('/users', async (req, res) => {
  const token=req.headers.authorization;
  try{
    const decoded=jwt.verify(token,secretKey);
    const username=decoded.username;
    const user = await User.findOne({ username: username});
          res.status(200).json(user);
  }catch(err) {
    res.json({error:err.message});
  }
})

// Starting the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
