const fs = require("fs");
const path = require("path");

module.exports = app =>
  fs
    .readdirSync(__dirname)
    .filter(item => item !== "index.js")
    .forEach(item => {
      require(__dirname + "/" + item)(app);
    });
