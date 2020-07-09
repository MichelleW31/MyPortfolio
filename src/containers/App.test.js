import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import App from "./App";
import Header from "../components/Header/Header";

describe("App Component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Header Component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
