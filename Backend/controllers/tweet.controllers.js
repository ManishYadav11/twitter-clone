const Tweet = require('../models/tweet.model'); // Import the Tweet model
 // create the tweet

const createTweet = async (req, res) => {
    try {
        const { description, userId } = req.body;
        
        // Check if both description and userId are provided
        if (!description || !userId) {
            return res.status(400).json({ error: "Fields are required" });
        }

        // Create a new tweet using the Tweet model
        const newTweet = await Tweet.create({ description, userId });

        // Return the created tweet as a response
        res.status(201).json({ message: "Tweet created successfully", newTweet });
    } catch (error) {
        console.error("Error creating tweet:", error);
        res.status(500).json({ error: "An error occurred while creating the tweet" });
    }
};

// Delete tweet by ID
const deleteTweet = async (req, res) => {
    try {
        const { tweetId } = req.params;
        await Tweet.findByIdAndDelete(tweetId);
        // Return success message
        return res.status(200).json({ message: "Tweet deleted successfully" });
    } catch (error) {
        console.error("Error deleting tweet:", error);
        res.status(500).json({ error: "An error occurred while deleting the tweet" });
    }
};

//Like or dislike


// save the tweet


//getAllTweets followers and mine

// get Following tweet



module.exports = { createTweet , deleteTweet };
