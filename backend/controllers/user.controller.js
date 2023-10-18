const Student = require('../models/student.models');

exports.addStudent =async (req,res) => {
    try {
        const { name, classs, marks } = req.body;

        console.log(name, classs, marks);

        const student = new Student({ name, classs, marks });
        await student.save();
        res.status(201).json({ message: "Student aded successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Something went wrong at adding the student"})
    }
}

exports.getAllStudents = async (req,res) => {
    try {
        const students = await Student.find();
        res.status(200).json({message:"ALL students data",students})
    } catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ message: "Something went wrong at getting all the student" });
    }
};

// Delete an employee
exports.deleteStudent = async (req, res) => {
    try {

        const studentId = req.params.id;
        await Student.findByIdAndRemove(studentId);

        res.status(204).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error deleting employee", error: error.message });
    }
};
