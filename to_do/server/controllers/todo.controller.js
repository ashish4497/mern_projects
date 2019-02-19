const Todo = require("../models/todo");

module.exports = {
  addTodo: (req, res) => {
    const newTodo = new Todo(req.body);
    newTodo.save((err, data) => {
      if (err) res.send(err);
      else res.json(data);
    });
  },
  getTodo: (req, res) => {
    Todo.find({}, (err, data) => {
      if (err) res.send(err);
      else res.json(data);
    });
  },
  oneTodo: (req, res) => {
    // console.log(req.params.id,"+++++++++++++++++++++===")
    Todo.findById({ _id: req.params.id }, (err, data) => {
      if (err) res.send(err);
      else res.json(data);
    });
  },
  deleteTodo: (req, res) => {
    Todo.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
      if (err) res.send(err);
      else
        Todo.find({}, (err, data) => {
          if (err) res.send(err);
          else res.json(data);
        });
    });
  }
};
