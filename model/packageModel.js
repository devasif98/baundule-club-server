const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packageSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    categories: {
      type: [String],
      required: true,
    },
    division: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    tourLocation: {
      type: String,
      required: true,
    },
    minDuration: {
      type: Number,
      required: true,
    },
    maxDuration: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    childPrice: {
      type: Number,
      required: true,
    },
    minMembers: {
      type: Number,
      required: true,
    },
    maxMembers: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
    facilities: {
      type: [String],
      required: true,
    },
    hopeDestination: {
      type: [String],
      required: true,
    },
    meals: {
      welcome: [
        {
          type: String,
          required: true,
        },
      ],
      lunch: [
        {
          type: String,
          required: true,
        },
      ],
      evening: [
        {
          type: String,
          required: true,
        },
      ],
    },
    mapUrl: {
      type: String,
      required: true,
    },
    availability: {
      type: Boolean,
      required: true,
    },
    inclusions: {
      type: [String],
      required: true,
    },
    exclusions: {
      type: [String],
      required: true,
    },
    tips: {
      type: [String],
      required: true,
    },
    pickupLocation: {
      type: String,
      required: true,
    },
    coverPic: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    additionalInfo: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
