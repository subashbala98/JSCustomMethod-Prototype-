/** Text changed to capitalize */
const text = "text changed to capitalize";
String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.slice(1, this.length);
};

text.capitalize();
