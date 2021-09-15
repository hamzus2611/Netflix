const express = require("express");
const config = require('config')
const connectDB = require('./config/connectDB');
const auth = require("./routes/auth");
const User = require("./routes/users");
const Movie = require("./routes/movie");
const List = require("./routes/list");

const app=express();
PORT= process.env.PORT||5000;


app.use(express.json());
connectDB();
app.use("/auth",auth)
app.use('/user',User)
app.use("/movie",Movie)
app.use('/list',List)

app.listen(PORT, (err)=>
err? console.log(err):
console.log(`server Running on PORT ${PORT}...`)

)