const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    classs: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    }
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;