/** Calculate the percentage */
const value = 1000;
Number.prototype.calcPercentage = function (per) {
  return this * (per * 0.01);
};

value.calcPercentage(17);
