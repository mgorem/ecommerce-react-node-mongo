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


// LOGIN
    router.post('/login', async (req,res) => {
        try{
            const user = await User.findOne({username: req.body.username})
            !user && res.status(401).json('Wrong Credentials')

            const hashedPassword = CryptoJS.AES.decrypt(
                user.password, 
                process.env.PASS_SEC
                )
            const password = hashedPassword.toString(CryptoJs.enc.utf-8)
                password !== req.body.password && res.status(401).json('Wrong Credentials')

                res.status(200).json(user)
        
        }catch(err){
            res.status(500).json(err)
        }
    })


module.exports = router