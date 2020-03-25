const sassdoc = require("sassdoc");
const { getOptions } = require("loader-utils");

module.exports = function () {
  const options = getOptions(this) || {};
  const callback = this.async();
  sassdoc
    .parse(this.resourcePath, options)
    .then(function (data) {
      const json = JSON.stringify(data);
      callback(null, `export default ${json};`);
    })
    .catch(function (err) {
      callback(err, `export default [];`);
    });
};
