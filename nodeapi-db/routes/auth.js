const router = require('express').Router() // import express router function
const User = require('../models/User') // import the userSchema to use it for authentication
const CryptoJS = require('crypto-js') // import library to hash passwords

// REGISTER
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    })

    try{
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
      }catch(err) {
          res.status(500).json(err)
      }
    })


module.exports = router