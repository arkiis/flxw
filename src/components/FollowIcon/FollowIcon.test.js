import { shallow } from "enzyme";
import React from "react";
import FollowIcon from "./FollowIcon";

it("expect to render FollowIcon component", () => {
  //mock the favorite coins
  const mockPrice = false;
  expect(shallow(<FollowIcon following={mockPrice} />)).toMatchSnapshot();
});

it("correctly changes the following button", () => {
  const mockCost = {
    logo_url: "http:cool.png",
    id: "BTC",
    name: "bitcoin",
    price: 2000,
    userId: "6ucslTCsfxaE6zlq5gIqGWzbgxA3"
  };
  const mockPrice = false;
  const wrapper = shallow(
    <FollowIcon price={mockCost} following={mockPrice} />
  );

  wrapper.find('[id="follow"]').simulate("click");
  expect(wrapper.state()).toEqual({ following: true });
  expect(wrapper.props()).toEqual({ following: false });
  expect(wrapper.props()).toEqual({ following: "red" });
  expect(wrapper.props().following).toEqual({ following: false });
});
