import { Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'

const StudentsTable = ({ student, handleEdit, handleDelete }) => {
    return (
        <Table variant={"striped"} colorScheme='teal'>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Class </Th>
                    <Th>Marks</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    student.map((student) => (
                        <Tr key={student._id}>
                            <Td>{student.name }</Td>
                            <Td>{student.classs}</Td>
                            <Td>{student.marks }</Td>
                    
                            <Td>
                                <Button colorScheme='blue' onClick={()=>handleEdit(student)}>Edit</Button>
                                <Button colorScheme='red' onClick={()=>handleDelete(student._id)}>Delete</Button>
                            </Td>
                        </Tr>

                    ))
                }
            </Tbody>
        </Table>
    )
};

export default StudentsTable