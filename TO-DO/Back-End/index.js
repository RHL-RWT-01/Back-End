const express = require("express");
const { todoSchema, updateTodo } = require("./types"); // Assuming types.js exports Zod schema as todoSchema
const { Todo } = require("./db"); // Assuming db.js exports a Todo model
const app = express();
const port = 3000;

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

// Route to fetch all Todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find(); // Fetches all todos from the database
    res.json(todos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch todos", error: error.message });
  }
});

// Route to mark a Todo as completed
app.put("/completed", async (req, res) => {
  const { _id } = req.body; // Assuming the request body contains an `id` to update
  const result = updateTodo.safeParse({ id: _id });
  if (result.success) {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { completed: true },
      );
      if (updatedTodo) {
        res.json({ message: "Todo marked as completed", todo: updatedTodo });
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to update Todo", error: error.message });
    }
  } else {
    res
      .status(400)
      .json({ message: "Invalid data", errors: result.error.errors });
  }
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
