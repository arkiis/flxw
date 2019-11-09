import styled from "styled-components";

export const Title = styled.h1`
  color: #4a4a4a;
`;
export const TitleId = styled.p`
  color: #b6b3bd;
  font-size: 20px;
  margin-left: 10px;
`;
export const Heading1 = styled.h3`
  font-size: 46px;
  color: #b6b3bd;
`;

export const PriceMainWrapper = styled.div`
  padding: 20px;

  background: white;
`;
export const PriceWrapper = styled.div`
  position: relative;
  max-width: 1140px;
  margin: 8px auto 32px;
`;
export const thirdPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

//chart section styles///////////////////
export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-bottom: 32px;
  @media ${props => props.theme.mediaQueries.large} {
    flex-direction: column;
  }
`;

export const ChartSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ChartAndDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
  border: 1px solid rgb(236, 239, 241);
  background: white;
  border-radius: 6px;
`;
export const ChartDetailsWrapper = styled.div`
  border-top: 1px solid rgb(236, 239, 241);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 32px;

  @media ${props => props.theme.mediaQueries.medium} {
    flex-direction: column;
  }
`;

export const ChartDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  width: 25%;
  margin: 14px 0;
  padding-left: 10px;

  @media ${props => props.theme.mediaQueries.medium} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 100%;
  }
`;

export const DetailItemHeader = styled.h2`
  color: rgba(17, 51, 83, 0.6);
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-bottom: 12px;
`;
export const DetailItemBody = styled.p`
  font-size: 18px;
  color: #1c1621;
  font-weight: 400;
`;

export const ChartAsideSection = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  width: 370px;
  flex-shrink: 0;
  @media only screen and (max-width: 1040px) {
    width: 100%;
    margin-left: unset;
  }
`;

export const AsideBuySection = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  width: 100%;
  margin-top: 0px;
  box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
  border-radius: 6px;
  background: white;
  border-style: none;
`;
export const AsideBuyWrapper = styled.div`
  margin-bottom: 24px;
  width: 100%;
  border-radius: 4px;
  border-style: solid;
  border-color: rgb(236, 239, 241);
  border-width: 1px;
`;
export const AsideBuyContent = styled.div`
  padding: 20px;

  display: flex;
  flex: 1 1 0%;
  align-self: stretch;
  min-height: 350px;
  justify-content: space-between;
  flex-direction: column;
`;
export const AsideBuyLabel = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  width: 100%;
  min-height: 64px;
  position: relative;
`;
export const AsideBuyTabs = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 0%;
  border-right: 1px solid rgb(236, 239, 241);
  border-collapse: collapse;
  background-color: rgba(17, 51, 83, 0.02);
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: #4a4a4a70;
  text-transform: uppercase;
  padding-top: 2px;
  border-bottom: 1px solid rgb(236, 239, 241);
  border-top: 1px solid rgb(236, 239, 241);

  &:last-child {
    border-top-right-radius: 4px;
  }
  &:first-child {
    border-top-left-radius: 4px;
  }
`;
export const AsideBuyBody = styled.div`
  display: flex;
  justify-content: center;
  min-height: 200px;
  flex-direction: row;
  align-items: center;
  position: relative;
  flex: 1 1 auto;
`;
export const AsideBuyFooter = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 16px;
  flex: 1 1 auto;
  border-top: 1px solid rgb(236, 239, 241);
`;

export const AsideBuySelection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border: 1px solid rgb(236, 239, 241);
`;
export const AsideBuySelectionItems = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  padding: 20px;
  border-bottom: 1px solid rgb(236, 239, 241);
`;

export const AsideBuySelectionOne = styled.p`
  display: flex;
  width: 30%;

  color: #4a4a4a90;
  align-items: center;
`;
export const AsideBuySelectionTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
`;

export const AsideSelectionTwoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  align-items: center;
`;

export const AsideAssetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid rgb(236, 239, 241);
  flex: 1 1 auto;
  overflow: hidden;
  border-radius: 6px;
  background: white;
`;
export const AsideAssetsSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
  border-radius: 6px;
  background: white;
`;

export const AsideAssetsHeader = styled.h2`
  margin-bottom: 26px;
  line-height: 1;
  font-size: 24px;
  color: ${({ gray }) => (gray ? "#4a4a4a" : "#1c1621")};
`;

export const AsideAssetBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: -16px 0;

  margin-top: 8px;
`;
export const AsideAssets = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  flex: 1 1 auto;
  max-width: 300px;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  @media only screen and (max-width: 1040px) {
    width: 100%;
    max-width: unset;
  }
`;
export const AsideAssetsName = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const AsideBuyActive = styled.div`
  border-top: 2px solid;
  border-color: #6433ff;
`;

//chart info section
export const InfoSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 14px;
`;
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  flex: 1 1 auto;
  border: 1px solid rgb(236, 239, 241);
  background: white;
  border-radius: 5px;
  box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
`;
export const InfoBody = styled.p`
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
  color: rgba(17, 51, 83, 0.6);
`;
export const ResourceHeader = styled.span`
  color: rgba(17, 51, 83, 0.6);
  margin-top: 15px;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2px;
`;
export const ResourceLink = styled.a`
  margin: 16px 0;
  display: flex;
  align-items: flex-start;
`;

export const ResourceIcon = styled.img`
  width: ${({ icon }) => (icon ? "10px" : "18px")};
  color: gray;
  margin-right: 10px;
`;

export const CustomButton = styled.a`
  cursor: ${props => props.nocursor};
  color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 10px 40px -10px rgba(100, 51, 255, 0.5);
  text-align: center;
  border: 0;
  transition: all 0.7s ease;
  background-color: ${props => props.buyColor};
`;
export const StickyButton = styled.a`
  position: fixed;
  padding: 20px;
  z-index: 100;
  border-radius: 4px;
  box-shadow: 0px 10px 40px -10px rgba(100, 51, 255, 0.5);
  text-align: center;
  border: 0;
  transition: all 0.7s ease;
  width: 90%;
  top: 0;
  margin: 0 auto;

  margin-top: 14px;
  color: #fff;
  background-color: #6433ff;
`;

//Heading styles/////////////////////
export const HeadingChartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0px;
  flex-direction: row;
`;
//ICONS
export const CoinIcon = styled.img`
  margin-right: 12px;
  width: 50px;
  height: 50px;
`;
export const AssetIcon = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 16px;
`;
export const HeadingChartSectionWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;
`;

export const HeadingChartSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const HeadingChartSectionTwo = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-direction: row;
  width: 380px;
`;

export const ExpandInfo = styled.div`
  line-height: 1.9;
`;
