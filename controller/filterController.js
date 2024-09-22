const asyncHandler = require("express-async-handler");
const Error = require("http-errors");
const Package = require("../model/packageModel");

const filterPackages = asyncHandler(async (req, res) => {
  const { categories, division, duration, page, limit } = req.query;

  const filter = {};

  // filter packages by categories
  if (categories) {
    const categoryArray = categories.split(",");

    if (categoryArray.length === 1) {
      filter.categories = categoryArray[0];
    } else {
      filter.categories = { $in: categoryArray };
    }
  }

  // filter packages by division
  if (division) {
    filter.division = division;
  }

  // filter packages by duration
  if (duration) {
    const [minDuration, maxDuration] = duration.split("-").map(Number);

    if (!isNaN(minDuration) && !isNaN(maxDuration)) {
      filter.duration = {
        $gte: minDuration,
        $lte: maxDuration,
      };
    } else {
      throw Error(400, "Invalid duration range");
    }
  }

  // filter by pagination
  const skip = (page - 1) * limit;
  const options = {
    skip: skip,
    limit: Number(limit),
  };

  const data = await Package.find(filter, null, options);
  const total = await Package.countDocuments();

  res.status(200).json({ total, data });
});

module.exports = filterPackages;
