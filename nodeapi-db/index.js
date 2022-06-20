const express = require('express') //import express
const app = express() // use express to make an express server
const mongoose = require('mongoose') // import mongoose
const dotenv = require('dotenv')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

dotenv.config()
// use mongoose to connect to mongoDB
mongoose.connect(
    process.env.MONGO_URL)
    .then(() => console.log('DB Connection Successful!'))
    .catch((err) => {
     console.log(err)
 })

 app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)


// listen for any changes on this port
app.listen(process.env.PORT || 5000, () => {
    console.log('Backend Server is Running!')
})