import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import axios from 'axios'
import StudentsTable from './StudentsTable';
const Home = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

     const handleAdd = () => {
        navigate('/add')
    }
    const handleLogout = () => {
        localStorage.removeItem('userInfo')
        navigate('/')
    }
    useEffect(() => {
        const fetchData = async () => {
            
            const config = {
                headers: {
                    'Content-type':'application/json'
                }
            }
            const { data } = await axios.get('http://localhost:8001/student/get', config);
            setStudents(data.students)
        }
        fetchData();
    },[])
    console.log(students);
    

    const handleEdit = async() => {
        
    }

    const handleDelete = async (studentId) => {
        try {
            await axios.delete(`http://localhost:8001/student/delete/${studentId}`);
            setStudents((prevstudent) => prevstudent.filter((student) => student._id !== studentId));
        } catch (error) {
            console.error('Error deleting employee', error);
        }
    }

    return (
        <>
            <Button onClick={handleAdd}>
                Add Student
            </Button>
            <Button onClick={handleLogout}>
                Logout
            </Button>

            <Box>
                <StudentsTable student={students} handleDelete={handleDelete} handleEdit={handleEdit}/>
            </Box>
        </>
    
    )
};

export default Home