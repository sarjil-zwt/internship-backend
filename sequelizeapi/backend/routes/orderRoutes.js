const { Router } = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const { createOrder } = require("../controllers/orderController");

const router = Router();

//Profile Update, Get profile

router.post("/", isAuthenticatedUser, createOrder);

module.exports = router;
