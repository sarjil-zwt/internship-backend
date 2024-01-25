const {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
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
router.delete(
  "/:id",
  isAuthenticatedUser,
  authorizeRoles("admin", "manager"),
  deleteProduct
);

module.exports = router;
