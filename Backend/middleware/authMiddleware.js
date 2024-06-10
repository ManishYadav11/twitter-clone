const { getUser } = require("../service/auth.service.js");

async function restrictToLoggedInUserOnly(req, res, next) {
    const userUid = req.cookies?.uidCookie;
    if (!userUid) {
        return res.status(401).json({ error: "User not authenticated" });
    }

    const user = await getUser(userUid);
    if (!user) {
        return res.status(401).json({ error: "User not authenticated" });
    }

    req.user = user.userId;
    next();
}

async function checkAuth(req, res, next) {
    const userUid = req.cookies?.uidCookie;
    if (!userUid) {
        req.user = null; // No user authenticated
    } else {
        const user = await getUser(userUid);
        req.user = user;
    }
    next();
}

module.exports = { restrictToLoggedInUserOnly, checkAuth };
