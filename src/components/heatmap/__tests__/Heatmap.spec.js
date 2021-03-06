import React from "react";
import Component from "../Heatmap";
import { shallow } from "enzyme";

const defaultProps = {
  classes: {},
  open: false,
  setOpen: jest.fn()
};

describe("Heatmap", () => {
  it("renders", () => {
    const wrapper = shallow(<Component {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
