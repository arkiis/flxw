import React from "react";
import * as Styles from "./PriceDetailStyles";
import ExpandedInfo from "./ExpandPriceDescription";
import paper from "../../assets/images/paper-plane-regular.svg";

const PriceDescription = ({ price, simplifyMeta, metaData }) => {
  return (
    <Styles.InfoSectionWrapper>
      <Styles.InfoSection>
        <Styles.AsideAssetsHeader gray>
          What is {price.name}?
        </Styles.AsideAssetsHeader>

        <Styles.InfoBody>
          <ExpandedInfo simplifyMeta={simplifyMeta} metaData={metaData} />
        </Styles.InfoBody>
        <Styles.ResourceHeader>Resources</Styles.ResourceHeader>
        <Styles.ResourceLink href={metaData.whitepaper_url}>
          <Styles.ResourceIcon src={paper} />
          <p>whitepaper</p>
        </Styles.ResourceLink>
      </Styles.InfoSection>
    </Styles.InfoSectionWrapper>
  );
};

export default PriceDescription;
