const express = require('express');
const connectDB = require('./config/connectDB');
// const config = require('config')
const auth = require("./routes/auth");
const User = require("./routes/users");
const Movie = require("./routes/movie");
const List = require("./routes/list");
const app = express();

connectDB();
app.use(express.json());
PORT = process.env.PORT || 5000;
app.use("/auth", auth)
app.use('/user', User)
app.use("/movie", Movie)
app.use('/list', List)

app.listen(PORT, (err) =>
    err ? console.log(err) :
        console.log(`server Running on PORT ${PORT}...`)

)