const {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");
const { authorizeRoles, isAuthenticatedUser } = require("../middleware/auth");

const { Router } = require("express");
const { route } = require("./cartRoute");

const router = Router();
router.get("/", getAllProducts);

router.get("/:id", getSingleProduct);

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
