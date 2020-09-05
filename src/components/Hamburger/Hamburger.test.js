import React from "react";
import renderer from "react-test-renderer";
import Hamburger from "./Hamburger";

describe("Hamburger Component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Hamburger />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
