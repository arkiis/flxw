import React, { Component } from "react";
import Table from "../../components/Table/Table";
import Heading from "../../UI/Headings/Heading";

import HomepageStatisticBanner from "../../UI/Banner/HomepageStatisticBanner";
import ModalUI from "../../components/ModalUI/ModalUI";
import GetStartedBanner from "../../UI/Banner/GetStartedBanner";
import Footer from "../../UI/Footer/Footer";
import * as Styles from "./homepage.styles";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import HomeFeatureSection from "./HomeFeatureSection/HomeFeatureSection";
import GettingStartedSection from "./HomeGettingStartedSection/GettingStartedSection";
import IconAccount from "../../assets/images/icon_account-01.svg";
import IconBank from "../../assets/images/icon_bank-01.svg";
import IconMoney from "../../assets/images/icon_money-01.svg";
import NewsletterContent from "../../components/ModalUI/NewsletterContent/NewsletterContent";

//data for the statistic banner
const bannerData = [
  { heading: "$150B", subHeading: "Cryptocurrency exchanged" },
  { heading: "24", subHeading: "Countries Supported" },
  { heading: "100", subHeading: "Customers served" }
];
//data for the steps section
const homepageStepsSection = [
  { image: IconAccount, heading: "Create an account" },
  { image: IconBank, heading: "Link your bank account" },
  { image: IconMoney, heading: "Start buying & selling" }
];

//icons for the feature Section
const icons = [
  {
    heading: "Manage your portfolio",
    subHeading:
      "Buy and sell popular digital currencies, keep track of them in one place."
  },
  {
    heading: "Manage your portfolio",
    subHeading:
      "Buy and sell popular digital currencies, keep track of them in one place."
  },
  {
    heading: "Manage your portfolio",
    subHeading:
      "Buy and sell popular digital currencies, keep track of them in one place."
  }
];

const Homepage = ({ isToggle, setToggle, onClose }) => {
  console.log(onClose);
  return (
    <Styles.HomeMainWrapper>
      <Styles.HomepageWrapper>
        {/*Hero section of homepage */}
        <HomeHeroSection Heading={Heading} />
        <Table />

        {!isToggle && (
          <ModalUI
            heading="Join The Club"
            id="modal"
            isToggle={isToggle}
            setToggle={setToggle}
            onClose={onClose}
          >
            <NewsletterContent />
          </ModalUI>
        )}

        {/*Feature section of homepage*/}
        <HomeFeatureSection Heading={Heading} icons={icons} />

        {/*Statistics banner of homepage*/}
        <Styles.BlueBackground>
          <HomepageStatisticBanner
            bannerData={bannerData}
            children
          ></HomepageStatisticBanner>
        </Styles.BlueBackground>

        {/*Getting started section and banner of homepage*/}
        <GettingStartedSection
          Heading={Heading}
          homepageStepsSection={homepageStepsSection}
        />
        <GetStartedBanner></GetStartedBanner>

        {/*footer*/}
        <Footer />
      </Styles.HomepageWrapper>
    </Styles.HomeMainWrapper>
  );
};

export default Homepage;
