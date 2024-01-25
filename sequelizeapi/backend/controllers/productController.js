// const User = require("../models/userModel");
const db = require("../models");

const Product = db.product;
const CateGory = db.category;
const CartItem = db.cartItem;

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
    const products = await Product.findAll({
      include: [
        {
          model: CateGory,
        },
      ],
    });

    res.status(200).json({
      status: 200,
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
    let product = await Product.findOne({
      where: { id: req.params.id },
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }

    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    product = await Product.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: CateGory,
        },
      ],
    });

    res.status(200).json({
      status: 200,
      success: true,
      product,
    });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!product) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Product not found",
      });
    }

    await CartItem.destroy({
      where: {
        ProductId: req.params.id,
      },
    });

    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: 200,
      success: true,
      message: "Product deleted",
    });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
