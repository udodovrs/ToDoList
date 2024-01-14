require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {
  addTodo,
  getTodos,
  deleteTodo,
  getTodo,
  editTodo,
} = require("./controllers/todo");

const port = 3001;
const app = express();
app.use(express.static("../my-app/build"));
app.use(express.json());

app.get("/Todo/:id", async (req, res) => {
  const todo = await getTodo(req.params.id);
  res.send({ error: null, data: todo });
});

app.post("/addTodo", async (req, res) => {
  await addTodo(req.body);
  res.send({ error: null, data: "Задача создана" });
});

app.delete("/deleteTodo/:id", async (req, res) => {
  await deleteTodo(req.params.id);
  res.send({ error: null, data: "Задача успешно удалена" });
});

app.post("/getTodos", async (req, res) => {
  const todos = await getTodos(req.body);
  res.send({ error: null, data: todos });
});

app.post("/editTodo/:id", async (req, res) => {
  await editTodo(req.params.id, req.body);
  res.send({ error: null, data: "Задача успешно сохранена" });
});

mongoose.connect(process.env.DB_CONECTION_STRING).then(() => {
  app.listen(port, () => {
    console.log(`Server was started on port ${port}`);
  });
});
