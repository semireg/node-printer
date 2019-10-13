var printer_helper = {},
  fs = require("fs"),
  child_process = require("child_process"),
  os = require("os"),
  path = require("path"),
  binding_path = path.resolve(__dirname, "./node_printer.node"),
  printer_helper;

if (fs.existsSync(binding_path)) {
  printer_helper = require(binding_path);
} else {
  printer_helper = require("./node_printer_" +
    process.platform +
    "_" +
    process.arch +
    ".node");
}

/** communicate directly with device using path
 */
module.exports.readPath = readPath;
module.exports.writePath = writePath;

function writePath(path, data) {
  return printer_helper.writePath(path, data);
}

function readPath(path) {
  return printer_helper.readPath(path);
}
