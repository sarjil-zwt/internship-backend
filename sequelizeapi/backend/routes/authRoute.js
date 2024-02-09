const express = require("express");
const {
  loginUser,
  signupUser,
  logoutUser,
} = require("../controllers/userControllers");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/logout", isAuthenticatedUser, logoutUser);

module.exports = router;
