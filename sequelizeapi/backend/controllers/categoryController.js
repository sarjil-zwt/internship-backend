// const User = require("../models/userModel");
const db = require("../models");

const Category = db.category;

exports.addCategory = async (req, res, next) => {
  try {
    console.log(req.body);
    const name = req.body.name;
    const isPresentCategory = await Category.findOne({ where: { name } });

    console.log(isPresentCategory);

    if (isPresentCategory) {
      return res.status(400).json({
        success: false,
        error: "Category Already exists",
      });
    }

    const category = await Category.create(req.body);

    res.status(201).json({
      status: 201,
      success: true,
      category,
    });
  } catch (error) {
    console.error("Error creating category:", error.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();

    res.status(200).json({
      status: 200,
      success: true,
      categories,
    });
  } catch (error) {
    console.error("Error in getting category: ", error.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const category = Category.findOne({ where: { id: req.params.id } });
    if (!category) {
      return res.status(404).json({
        success: false,
        error: "Category not found",
      });
    }

    await Category.update(
      { name: req.body.name },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      status: 200,
      success: true,
      message: "Category Updated",
    });
  } catch (error) {
    console.error("Error in getting category: ", error.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
