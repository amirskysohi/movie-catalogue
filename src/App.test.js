import React from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { shallow } from "enzyme";

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    const browserRouterComp = wrapper.find(BrowserRouter);
    const routeComp = wrapper.find(Route);

    expect(browserRouterComp.length).toBe(1);
    expect(routeComp.length).toBe(2);
  });
});
