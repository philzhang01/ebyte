import React from "react";
import { shallow } from "enzyme";

import { CartIcon } from "./cart-icon.component";

describe("CartIcon component", () => {
  let wrapper;
  let toggleCartHidden;

  beforeEach(() => {
    toggleCartHidden = jest.fn();

    const mockProps = {
      toggleCartHidden,
      itemCount: 10
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  it("should render CartIcon component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call toggleCartHidden fn", () => {
    wrapper.find(".cart-icon").simulate("click");

    expect(toggleCartHidden).toHaveBeenCalled();
  });
});
