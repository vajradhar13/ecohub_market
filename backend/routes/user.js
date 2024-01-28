const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user")

router.post("/signup", async(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const cPassword = req.body.cPassword;

    // Input handling
    if (!username || !email || !password || !cPassword) {
        return res.status(400).json("All fields are required.");
    }
    
    if (!email.includes('@')) {
        return res.status(400).json('Enter a correct email address.');
    }    
    if(password.length<8){
        return res.json("Password should contain atleast 8 characters")
    }
    if(password !== cPassword){
        return res.json("Password and Confirm password should be same")
    }

    // Check if the username is already taken
    const existingUser = await User.findOne({ email});
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
        username: username,
        email: email,
        password: hashedPassword,
    });

    // Save the user to the database
    await user.save();
    res.status(201).json({ msg: 'User created successfully' });
})

router.post("/signin", async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    const user = await User.findOne({ email, password});

    // Check if the user exists
    if (!user) {
        return res.status(401).json('Incorrect email and password');
    }

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
        // Generate a JWT token
        const token = jwt.sign({ username: user.username }, process.env.SECRET);

        // Send the token in the response
        res.json({ token });
    } else {
        res.status(401).json({ msg: 'Incorrect email and password' });
    }
})

module.exports = router;