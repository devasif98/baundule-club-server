const express = require("express");
const {
  getAllCategories,
  createCategory,
  deleteCategory,
  getSingleCategory,
  updateCategory,
} = require("../controller/categoryController");
const router = express.Router();

router.route("/").get(getAllCategories).post(createCategory);
router
  .route("/:id")
  .get(getSingleCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
