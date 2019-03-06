const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');
const User = require('../models/user');

//middleware
var isLoginIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

router.get('/', isLoginIn, (req, res) => {
  res.render('index');
});

router.get('/todos', isLoginIn, (req, res) => {
  res.render('index');
});

router.get('/todos/:id', isLoginIn, (req, res) => {
  res.render('index');
});

router.get('/signup', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('index');
});

router.get('/logout', (req, res) => {
  res.render('index');
});

//addTodo
router.post('/api/todo', todoController.addTodo);

//get all data in todo
router.get('/api/todo', todoController.getTodo);

//get the one todo data
router.get('/api/todo/:id', todoController.oneTodo);

//delete todo list
router.delete('/api/todo/:id', todoController.deleteTodo);

//signUp form
router.post('/api/signup', todoController.signUp);

//login form
router.post('/api/login', todoController.login);

//logout
router.get('/api/logout', todoController.logout);

//isLoggedIn
router.get('/api/isLoggedIn', todoController.isLoggedIn);

module.exports = router;
