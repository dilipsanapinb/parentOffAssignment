const Student = require('../models/student.models');

exports.addStudent =async (req,res) => {
    try {
        const { name, classs, marks } = req.body;

        const student = new Student({ name, classs, marks });
        await student.save();
        res.status(201).json({ message: "Student aded successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Something went wrong at adding the student"})
    }
}