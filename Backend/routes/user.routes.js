const express = require("express");
const {handleSignUp, handleLogin, handleLogout, handleProfile, handleOtherUsers } = require("../controllers/user.controllers");
const router = express.Router();

router.post("/signup", handleSignUp);
router.post("/login", handleLogin);
router.get("/logout" , handleLogout)
router.get("/profile/:id" , handleProfile)
router.get("/users/:id", handleOtherUsers)

module.exports = router;
