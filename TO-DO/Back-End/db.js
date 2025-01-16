const mongoose = require('mongoose')
require('dotenv').config();
const uri= process.env.DB_URL
mongoose.connect(uri )

const TodoSchema = new mongoose.Schema({
    title:String,
    description:String
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports=Todo