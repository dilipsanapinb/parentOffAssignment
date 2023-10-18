import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
const Home = () => {
    const navigate = useNavigate();
    const handleAdd = () => {
        navigate('/add')
    }
    return (
        <>
            <Button onClick={handleAdd}>
                Add Student
            </Button>
            <Button>
                Logout
            </Button>
        </>
    
    )
};

export default Home