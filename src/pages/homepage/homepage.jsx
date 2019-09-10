import React, { Component } from "react";
import Table from "../../components/Table/Table";
import styled from "styled-components";
import { MainWrapper } from "../../hoc/layout/layout.js";
import Heading from "../../UI/Headings/Heading";

const HeaderContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;

  align-items: center;
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 35px 24px 150px;
`;

const HomepageWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 50vh;

  &:before {
    content: "";
    width: 100%;
    height: 55vh;

    background: #6433ff;
    position: absolute;
    top: 0;
  }
`;
export const HomeMainWrapper = styled.main`
  width: 100%;
  height: 89vh;
  position: relative;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Homepage extends Component {
  render() {
    return (
      <HomeMainWrapper>
        <HomepageWrapper>
          <HeaderWrapper>
            <HeaderContainer>
              <Heading size="h1" scale noMargin color={"white"}>
                Enter the crypto space
              </Heading>
              <Heading size="h2" scale noMargin color={"white"}>
                Flxw is the easiest place to buy, sell, and manage your
                cryptocurrency portfolio.
              </Heading>
            </HeaderContainer>
          </HeaderWrapper>
          <Table />
        </HomepageWrapper>
      </HomeMainWrapper>
    );
  }
}

export default Homepage;
