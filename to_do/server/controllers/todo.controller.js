const Todo = require('../models/todo');
const User = require('../models/user');
const passport = require('passport');
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
    Todo.findById({_id: req.params.id}, (err, data) => {
      if (err) res.send(err);
      else res.json(data);
    });
  },
  deleteTodo: (req, res) => {
    Todo.findByIdAndDelete({_id: req.params.id}, (err, data) => {
      if (err) res.send(err);
      else
        Todo.find({}, (err, data) => {
          if (err) res.send(err);
          else res.json(data);
        });
    });
  },
  signUp: (req, res) => {
    const username = req.body.username;
    User.find({username: username}, (err, user) => {
      if (err) throw err;
      else {
        if (user.length) {
          res.json({
            msg: 'User already exist'
          });
        } else {
          const newUser = new User(req.body);
          newUser.save((err, user) => {
            if (err) throw err;
            res.json(user);
          });
        }
      }
    });
  },

  login: (req, res, next) => {
    // console.log(req.body, 'todoController passport');
    passport.authenticate('local', function(err, user, info) {
      // console.log(user, '=================');
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(404).json({
          msg: 'invalid input'
        });
      }
      req.login(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.status(200).json({
          user
        });
      });
    })(req, res, next);
  },
  logout: (req, res) => {
    req.session.destroy();
    return (
      res.status(200).json({
        msg: 'success'
      }),
      res.render('index')
    );
  },
  isLoggedIn: (req, res) => {
    User.findOne({_id: req.user}, (err, user) => {
      return res.json({
        user
      });
    });
  }
};
