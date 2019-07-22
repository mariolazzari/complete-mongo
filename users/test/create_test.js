const assert = require("assert");
const User = require("../src/users");

describe("Create records.", () => {
  it("saves a user", () => {
    const joe = new User({ name: "Joe" });
    joe.save();
  });
});
