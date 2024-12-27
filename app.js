const express= require('express')
const userRouter= require('./routes/userRouter');
const connectdb = require('./db/connection');
const  mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const cors= require("cors");
require('./Models/usertable')
const app=express()
app.use(cors())
const port=8000;
const database='mongodb+srv://govind69:govind@cluster0.njwnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// app.get('/',(req,res)=>{
//     res.send("Hello World!")
// })
mongoose.set('strictQuery',false)
connectdb(database)

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/',userRouter)
app.listen(port,()=>{
    console.log(`server is running at port :${port}`);
})