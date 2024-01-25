const express = require("express");
const { loginUser, signupUser } = require("../controllers/userControllers");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router.post("/signup", signupUser);
router.post("/login", loginUser);

module.exports = router;