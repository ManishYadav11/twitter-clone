const express = require("express");
const router = express.Router();
const { createTweet, deleteTweet } = require("../controllers/tweet.controllers");

// Define the route for creating a tweet
router.post("/create", createTweet);
router.delete('/delete/:tweetId' , deleteTweet)

module.exports = router;
