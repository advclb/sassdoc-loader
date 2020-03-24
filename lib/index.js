const sassdoc = require("sassdoc");

module.exports = function () {
  const callback = this.async();
  sassdoc
    .parse(this.resourcePath, { verbose: true })
    .then(function (data) {
      const json = JSON.stringify(data);
      callback(null, `export default ${json};`);
    })
    .catch(function (err) {
      callback(err, `export default [];`);
    });
};
