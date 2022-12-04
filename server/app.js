console.log("hello world nodemon")
// we have to create the server and mapping the end points
const express = require('express')
//we have loaded the express module
const connectDB = require("./config/db")
const app = express();
connectDB();
app.use(express.json())
//express.json: will take care of the parsing the request content into json format

//define the routes
app.use('/api/users', require("./routes/api/users"));
app.use('/api/profile', require("./routes/api/profile"));
app.use('/api/auth', require("./routes/api/auth"));
app.use('/api/posts', require("./routes/api/posts"));

//express() is a function that will provide us the express application/server

//this express

//port wwill have unique numbers but used to exchange data over the network or internet
//we need to use the port as per the environment variable
//use port

const port = process.env.PORT || 5005;
app.listen(port, () => {
    console.log(`server listing on port:${port}`)
});

// we have to work with require function: it will help us to load the file/module