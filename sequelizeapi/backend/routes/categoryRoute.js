const {
  addCategory,
  getAllCategories,
  updateCategory,
} = require("../controllers/categoryController");

const { authorizeRoles, isAuthenticatedUser } = require("../middleware/auth");

const { Router } = require("express");

const router = Router();

router.get("/", getAllCategories);
router.post(
  "/",
  isAuthenticatedUser,
  authorizeRoles("admin", "manager"),
  addCategory
);
router.put(
  "/:id",
  isAuthenticatedUser,
  authorizeRoles("admin", "manager"),
  updateCategory
);

module.exports = router;
