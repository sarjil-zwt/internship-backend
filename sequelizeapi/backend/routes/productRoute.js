const {
  addProduct,
  getAllProducts,
  updateProduct,
} = require("../controllers/productController");
const { authorizeRoles, isAuthenticatedUser } = require("../middleware/auth");

const { Router } = require("express");

const router = Router();
router.get("/", getAllProducts);
router.post(
  "/",
  isAuthenticatedUser,
  authorizeRoles("admin", "manager"),
  addProduct
);
router.put(
  "/:id",
  isAuthenticatedUser,
  authorizeRoles("admin", "manager"),
  updateProduct
);

module.exports = router;
