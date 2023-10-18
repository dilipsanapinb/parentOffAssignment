import React, { useState } from 'react';
import {
    Box,
    Input,
    Button,
    Select,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [name, setName] = useState('');
    const [classs, setClasss] = useState('');
    const [marks,setmarks] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            };
            await axios.post('http://localhost:8001/student', {
            name,classs,marks
            }, config);
            navigate('/')
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Box p={4}>
            
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Class</FormLabel>
                    <Select
                        value={classs}
                        onChange={(e) => setClasss(e.target.value)}
                    >
                        <option value="Class1">Class1</option>
                        <option value="Class2">Class2</option>
                        <option value="Class3">Class3</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Marks</FormLabel>
                    <Input
                        type="number"
                        value={marks}
                        onChange={(e) => setmarks(e.target.value)}
                    />
                </FormControl>
            <Button mt={4} type="submit" colorScheme="blue"
                onClick={handleSubmit}
                >
                    Add Student
                </Button>
        </Box>
    );
};

export default AddStudent;
