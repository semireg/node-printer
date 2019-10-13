var printer = require('../lib');

var paths = [
  // Contact Semireg for details on this path.
];

var data = Buffer.from([]);

paths.forEach(function(path) {
  try {
    printer.writePath(path, data);
    var value = printer.readPath(path);
    console.log('return: ' + JSON.stringify(value));
    return;
  } catch (err) {
    console.error(err.message);
  }
});
