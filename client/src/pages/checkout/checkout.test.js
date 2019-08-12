import React from "react";
import { shallow } from "enzyme";
import CheckoutPage from "./checkout.component";

import { Provider } from "react-redux";
import { store } from "../../redux/store";

let wrapper;
beforeEach(() => {
  const mockProps = {
    cartItems: [],
    total: 100
  };

  wrapper = shallow(
    <Provider store={store}>
      <CheckoutPage {...mockProps} />
    </Provider>
  );
});

it("should render CheckoutPage component", () => {
  expect(wrapper).toMatchSnapshot();
});
