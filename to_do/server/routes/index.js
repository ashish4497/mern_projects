const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

router.get('/',(req,res)=>{
  res.render("index")
})

router.get('/todos',(req,res)=>{
  res.render("index")
})
router.get('/todos/:id',(req,res)=>{
  console.log('object');
  res.render("index")
})


//addtodo 
router.post('/api/todo', todoController.addTodo);

//get all data in todo
router.get('/api/todo',todoController.getTodo);

//get the one todo data
router.get('/api/todo/:id',todoController.oneTodo);

//delete todo list
router.delete('/api/todo/:id',todoController.deleteTodo);
module.exports= router;