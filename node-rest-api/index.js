const express = require ("express"); //importing the express library 
const app = express(); //Configuring the express app to use it
const mongoose = require ("mongoose"); //importing the mongoose library 
const dotenv = require ("dotenv"); //importing the dotenv library 

dotenv.config(); //Configuring the dotenv library

//Connecting to the mongoDB Database
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection Successful!"))
.catch((err) => {console.log(err);});

//Using express app to ensure sever is running
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend Server is Running!")
})