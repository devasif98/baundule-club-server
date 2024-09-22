const express = require("express");
const router = express.Router();
const {
  getPackageById,
  updatePackage,
  deletePackage,
  createPackage,
} = require("../controller/packageController");
const filterPackages = require("../controller/filterController");

router.route("/").get(filterPackages).post(createPackage);

router
  .route("/:id")
  .get(getPackageById)
  .put(updatePackage)
  .delete(deletePackage);

module.exports = router;
