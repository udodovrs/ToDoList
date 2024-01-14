const Todo = require("../models/Todo");

async function addTodo(dataTodo) {
  await Todo.create(dataTodo);
}

async function getTodos(data) {
  const todos = await Todo.find({
    title: { $regex: data.searchPhrase, $options: "i" },
  }).find({ status: { $regex: data.status, $options: "i" } });

  return todos.reverse();
}

function deleteTodo(id) {
  return Todo.deleteOne({ _id: id });
}

async function getTodo(id) {
  const todo = await Todo.findOne({ _id: id });
  return todo;
}

function editTodo(id, productData) {
  return Todo.findByIdAndUpdate(id, productData, {
    returnDocument: "after",
  });
}

module.exports = {
  addTodo,
  getTodos,
  deleteTodo,
  getTodo,
  editTodo
};
