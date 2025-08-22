const express = require('express');
const connectDB = require('./config/database');
const Student = require('./models/student'); 
const cors = require('cors');
const studentRoutes = require('./routes/studentRoute');


const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(cors({ origin: "http://localhost:5173",credentials: true}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT =process.env.PORT || 3000;

connectDB();



app.use("/students", studentRoutes);

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})