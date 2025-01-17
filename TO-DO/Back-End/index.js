const express = require("express");
const { todoSchema, updateTodo } = require("./types"); 
const cors = require("cors");
const { Todo } = require("./db"); // Assuming db.js exports a Todo model
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

// Route to create a new Todo
app.post("/todo", async (req, res) => {
  const todo = req.body;
  const result = todoSchema.safeParse(todo);
  if (result.success) {
    try {
      await Todo.create({
        title: todo.title,
        description: todo.description,
        completed: todo.completed || false,
      });
      res.status(201).json({ message: "Todo created successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to create Todo", error: error.message });
    }
  } else {
    res
      .status(400)
      .json({ message: "Invalid data", errors: result.error.errors });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch todos", error: error.message });
  }
});

app.put("/completed", async (req, res) => {
    const data = req.body;
    const result = updateTodo.safeParse(data);
    
    if (result.success) {
      try {
        const updatedTodo = await Todo.findByIdAndUpdate(data.id, { completed: true }, { new: true });
        if (updatedTodo) {
          res.json({ message: "Todo marked as completed", todo: updatedTodo });
        } else {
          res.status(404).json({ message: "Todo not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Failed to update Todo", error: error.message });
      }
    } else {
      res.status(400).json({ message: "Invalid data", errors: result.error.errors });
    }
  });
  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
