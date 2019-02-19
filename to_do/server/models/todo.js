const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new mongoose.Schema({
  title :{type:String, required:true},
  description : String
})

var Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;
