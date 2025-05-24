const bcrypt =require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const register =async(req,res)=>{

    try {
        const {username,password,role}=req.body;
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create new user
        const newUser = new User({ username, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: `User registered with username ${username}` });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error during registration.' });
    }

};
const login =async(req,res)=>{

    try {
        const {username,password}=req.body;
        const user = await User.findOne({username});

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        // Compare provided password with stored hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials." });
        }
        //Generate a token or create a session here
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send successful response
        res.status(200).json({ message: "Login successful",token ,user: { username: user.username, role: user.role } });


    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: "Something went wrong." });
    }
};

module.exports={
    register,login
}