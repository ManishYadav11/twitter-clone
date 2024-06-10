const User = require('../models/users.model');
const bcrypt = require("bcryptjs");
const { setUser } = require("../service/auth.service");

const handleSignUp = async (req, res) => {
  try {
    // Extracting user data from request body
    const { name, username, password, confirmPassword } = req.body;

    // Check if all required fields are provided
    if (!name || !username || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    // Hash the password
    const hashedPass = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      username,
      password: hashedPass,
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to handleLogin
const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate session token for logged in user
    const token = setUser(user);

    // Set the cookie with the session token
    res.cookie('uidCookie', token, { httpOnly: true});

    res.status(200).json({ message: 'Login successful' , user: user });
  } catch (e) {
    console.error("Error in login:", e);
    return res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

// logout
const handleLogout = (req, res) =>{
  res.clearCookie("uidCookie");
  res.json("Logout Succesfully")

}

// bookmarks tweet


// Profile
const handleProfile = async (req, res) => {
  try {
    const id = req.params.id;
    console.log('Fetching user with ID:', id);
    const user = await User.findById(id);

    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: "User does not exist" });
    }

    console.log('User fetched successfully:', user);
    return res.status(200).json({ message: "User fetched successfully", user: user });
    
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "An error occurred while fetching the user" });
  }
}


//get Other USers
const handleOtherUsers = async (req, res) => {
  try {
    const { id } = req.params;
    // Use await to handle the asynchronous operation
    const otherUsers = await User.find({ _id: { $ne: id } });

    // Check if any users are found
    if (!otherUsers.length) {
      return res.status(404).json({ message: "No other users found" });
    }
    // Send the list of other users
    return res.status(200).json({ message: "Other users fetched successfully", otherUsers });

  } catch (error) {
    console.error('Error fetching other users:', error);
    res.status(500).json({ message: "An error occurred while fetching other users" });
  }
};


// follow Users
 const handleFollowFollowing = async (req ,res)=>{
  try {
    
  } catch (error) {
    
  }

 }
module.exports = { handleSignUp, handleLogin , handleLogout , handleProfile , handleOtherUsers};
