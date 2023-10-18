const express = require('express');
const connection=require('./database/db')
const studentRouter=require('./routes/user.routes')
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message:"Basic route"})
})


app.use('/student',studentRouter)
app.listen(8001, async () => {
    try {
        await connection;
        console.log('Connected to DB');
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Server is running on port 8001`);
})