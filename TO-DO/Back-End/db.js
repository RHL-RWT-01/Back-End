const mongoose = require('mongoose')
require('dotenv').config();
const url_db= process.env.DB_URL
mongoose.connect(url_db )

const todoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  });
  
  const Todo = mongoose.model('Todo', todoSchema);
  
  module.exports = { Todo }; 