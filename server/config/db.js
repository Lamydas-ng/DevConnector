const config = require('config');
const mongoose = require("mongoose");

//config lib will help us to load our configuration which which are required in the application
//const db = config.get("mongoURI")
const db = "mongodb://127.0.0.1:27017/devConnector"

const connectDB = async () => {
// to connect to mongodb.
    try {
// we will write the code where we may get an error

        await mongoose.connect(db, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCrearedIndex: true,
            // useFindAndModify: false
        });
       
        console.log("connected to mongodb");
    } catch (error) {
        // we will handle the error: we will rpovide the solution to the occurred error/problem
        console.log(JSON.stringify(error));

    }
}

 //connectDB();
// console.log("mongodb: " + db);
//const:keyword: reserved word
//itwill not allow us to change the value of the variable

module.exports = connectDB;
