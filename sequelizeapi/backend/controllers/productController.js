// const User = require("../models/userModel");
const db = require("../models");

const Product = db.product;

exports.addProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      status: 201,
      success: true,
      product,
    });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();

    res.status(201).json({
      status: 201,
      success: true,
      products,
    });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({ where: { id: req.params.id } });

    if (!product) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }

    const updatedProduct = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(201).json({
      status: 201,
      success: true,
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
