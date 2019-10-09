import React, { Component } from "react";
import Table from "../../components/Table/Table";

import Heading from "../../UI/Headings/Heading";

import Banner from "../../UI/Banner/Homepage-banner";

import GetStartedBanner from "../../UI/Banner/GetStartedBanner";
import Footer from "../../UI/Footer/Footer";
import * as Styles from "./homepage.styles";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import HomeFeatureSection from "./HomeFeatureSection/HomeFeatureSection";
import GettingStartedSection from "./HomeGettingStartedSection/GettingStartedSection";

class Homepage extends Component {
  render() {
    return (
      <Styles.HomeMainWrapper>
        <Styles.HomepageWrapper>
          {/*Hero section of homepage */}
          <HomeHeroSection Heading={Heading} />
          <Table />

          {/*Feature section of homepage*/}
          <HomeFeatureSection Heading={Heading} />

          {/*Statistics banner of homepage*/}
          <Styles.BlueBackground>
            <Banner children></Banner>
          </Styles.BlueBackground>

          {/*Getting started section and banner of homepage*/}
          <GettingStartedSection Heading={Heading} />
          <GetStartedBanner></GetStartedBanner>

          {/*footer*/}
          <Footer />
        </Styles.HomepageWrapper>
      </Styles.HomeMainWrapper>
    );
  }
}

export default Homepage;
