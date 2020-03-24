const compiler = require("./compiler");

test("Inserts name and outputs JavaScript", async function () {
  const stats = await compiler("source.scss");
  const output = stats.toJson().modules[0].source;
  expect(output).toBe(
    'export default [{"description":"This is a function\\nThe function does nothing\\n","commentRange":{"start":11,"end":17},"context":{"type":"function","name":"message","code":"\\n  @return null;\\n","line":{"start":18,"end":20}},"access":"private","group":["messages"],"parameter":[{"type":"String","name":"theme","description":"Theme name"},{"type":"String","name":"key","description":"Key name"}],"return":{"type":"String"},"file":{"path":"source.scss","name":"source.scss"}},{"description":"This is a mixin\\nThe mixin does nothing\\n","commentRange":{"start":3,"end":7},"context":{"type":"mixin","name":"set-minimum-level","code":"\\n","line":{"start":8,"end":9}},"access":"public","parameter":[{"type":"String","name":"level"}],"output":"Nothing","group":["undefined"],"file":{"path":"source.scss","name":"source.scss"}}];'
  );
});
