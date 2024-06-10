const express = require("express");
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const { connectToMongoDb } = require("./dbConfig/db");
const userRoutes = require("./routes/user.routes");
const { restrictToLoggedInUserOnly, checkAuth } = require("./middleware/authMiddleware");
const tweetRoutes = require("./routes/tweet.route");
const cors = require("cors")


const app = express();

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8000;

// Middleware to validate JSON
app.use(express.json({
    verify: (req, res, buf, encoding) => {
        try {
            JSON.parse(buf.toString());
        } catch (e) {
            res.status(400).json({ error: "Invalid JSON" });
            throw new Error('Invalid JSON');
        }
    }
}));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true // Include cookies in the CORS request
};
app.use(cors(corsOptions));
// Routes
app.use("/", userRoutes);
app.use("/tweet",restrictToLoggedInUserOnly, tweetRoutes);

app.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server successfully started at port: ${PORT}`);
});
