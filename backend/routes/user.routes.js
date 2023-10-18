const express = require('express');

const studentRouter = express.Router();

const studentController = require('../controllers/user.controller');

studentRouter.post('/add', studentController.addStudent);

studentRouter.get('/get', studentController.getAllStudents)

studentRouter.delete('/delete/:id',studentController.deleteStudent)

module.exports=studentRouter