const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let todos = [
  { id: 1, todo: "Learn Node.js", done: false },
  { id: 2, todo: "Build an API", done: false },
];

app.get("/api/todo", (req, res) => {
  res.json(todos);
});

app.post("/api/todo", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete("/api/todo/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== parseInt(id, 10));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
