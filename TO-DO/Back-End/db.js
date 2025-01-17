const mongoose = require('mongoose')
require('dotenv').config();
const url_db= process.env.DB_URL
mongoose.connect(url_db )

const TodoSchema = new mongoose.Schema({
    title:String,
    description:String
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports=Todo