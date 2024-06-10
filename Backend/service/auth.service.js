const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables from the .env file in the root directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const secretKey = process.env.secretKey;

if (!secretKey) {
    console.error("secretKey is not defined")
}

function setUser(user) {
    const payload = {
        _id: user._id,
    };
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

function getUser(token) {
    if (!token) return null;

    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser, getUser
};
