const express = require('express');

const studentRouter = express.Router();

const studentController = require('../controllers/user.controller');

studentRouter.post('/add', studentController.addStudent);

module.exports=studentRouter