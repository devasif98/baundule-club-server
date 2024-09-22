const asyncHandler = require("express-async-handler");
const Error = require("http-errors");
const Category = require("../model/categoryModel");

// get all categories
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  if (!categories) {
    throw Error(404, "No categories found");
  }

  res.status(200).json(categories);
});

// get single category by id
const getSingleCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    throw Error("No category found");
  }

  res.status(200).json(category);
});

// create category
const createCategory = asyncHandler(async (req, res) => {
  const categoryData = req.body;

  // category exists
  const categoryExists = await Category.findOne({ title: categoryData.title });

  if (categoryExists) {
    throw Error(400, "Category already exists");
  }

  const category = await Category.create(categoryData);

  res.status(201).json({ success: true, data: category });
});

// update category
const updateCategory = asyncHandler(async (req, res) => {
  const categoryId = req.params.id;
  const categoryData = req.body;

  const category = await Category.findByIdAndUpdate(categoryId, categoryData, {
    new: true,
    runValidators: true,
  });

  if (!category) {
    throw Error(404, "Category not found");
  }

  res.status(200).json({ success: true, data: category });
});

// delete category
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    throw Error("Cannot find category");
  }

  await category.deleteOne();

  res.status(200).json({ success: true, data: category });
});

module.exports = {
  getAllCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
