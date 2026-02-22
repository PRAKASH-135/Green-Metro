const { METRO_EMISSION, CAR_EMISSION } = require("../utils/constants");

exports.calculateCarbonSaved = (distance) => {
  return (CAR_EMISSION - METRO_EMISSION) * distance;
};