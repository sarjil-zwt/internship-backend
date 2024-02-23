const express = require("express");
const { gerUsers } = require("../controllers/userController");

const router = express.Router();

router.post("/", gerUsers);

module.exports = router;
