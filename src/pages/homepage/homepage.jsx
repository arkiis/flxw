import React, { Component } from "react";
import Table from "../../components/Table/Table";
import styled from "styled-components";
import { MainWrapper } from "../../hoc/layout/layout.js";
import Heading from "../../UI/Headings/Heading";
import Icons from "../../UI/Icons/Icons";
import Iphone from "../../assets/images/iPhoneX-Mockup-flxw.png";
import Banner from "../../UI/Banner/Homepage-banner";
import StepSections from "../../UI/stepsSection/StepsSection";
import GetStartedBanner from "../../UI/Banner/GetStartedBanner";
import Footer from "../../UI/Footer/Footer";

const HeaderContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 20px;

  margin-top: 50px;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1080px;
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

  &:before {
    content: "";
    width: 100%;
    height: 55vh;

    background: #6433ff;
    position: absolute;
    top: 0;
  }
`;
export const HomeMainWrapper = styled.div`
  width: 100%;
  height: 89%;
  position: relative;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 140px;
`;
const FeatureImg = styled.img`
  max-width: 100%;
`;
const BlueBackground = styled.div`
  background-color: #6433ff;
  width: 100%;
`;
const GreyBackground = styled.div`
  background-color: #c8d8e7;
  position: relative;
  display: flex;
  width: 100%;

  flex: 1 0 auto;
  align-items: center;
  overflow: hidden;
  flex-direction: row;
  height: 460px;
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
          <HeaderWrapper>
            <HeaderContainer>
              <Heading size="h1" scale noMargin color={"#6433ff"}>
                Create your crypto portfolio today
              </Heading>
              <Heading size="h2" scale noMargin color={"#6433ff80"}>
                Flxw has a variety of features that make it the best place to
                start trading cryptocurrency portfolio.
              </Heading>
              <FeatureWrapper>
                <Icons />
                <div style={{ maxWidth: "600px" }}>
                  <FeatureImg src={Iphone} />
                </div>
              </FeatureWrapper>
            </HeaderContainer>
          </HeaderWrapper>
          <BlueBackground>
            <Banner children></Banner>
          </BlueBackground>

          {/* end of banner */}

          <HeaderContainer>
            <Heading size="h1" scale noMargin color={"#6433ff"}>
              Get started in minutes
            </Heading>
            <Heading size="h2" scale noMargin color={"#6433ff"}>
              Flxw supports a variety of the most popular digital currencies.
            </Heading>
          </HeaderContainer>
          <FeatureWrapper>
            <StepSections></StepSections>
          </FeatureWrapper>

          <GetStartedBanner></GetStartedBanner>
          <Footer />
        </HomepageWrapper>
      </HomeMainWrapper>
    );
  }
}

export default Homepage;
