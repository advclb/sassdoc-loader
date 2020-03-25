const compiler = require("./compiler");

test("Output match snapshot", async function () {
  const stats = await compiler("source.scss");
  const output = stats.toJson().modules[0].source;
  expect(output).toMatchSnapshot();
});
