import styled from "styled-components";

export const DashboardWrapperOne = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.mediaQueries.medium} {
  }
`;

export const DashboardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media only screen and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    flex-flow: column-reverse;
    padding: 0 20px;
  }
`;

export const DashboardPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  width: 558px;

  background: white;
  border-radius: 5px;
  box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
  border: 1px solid rgb(236, 239, 241);
  margin-bottom: 20px;

  @media ${props => props.theme.mediaQueries.medium} {
    width: 100%;
  }
`;
export const DashboardFollowing = styled.div`
  display: flex;
  flex-direction: column;
  width: 558px;

  background: white;
  border-radius: 5px;
  @media ${props => props.theme.mediaQueries.medium} {
    width: 100%;
  }
`;
export const FollowingSection = styled.div`
  display: flex;
  height: 300px;
  margin-bottom: 40px;
  box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
  border: 1px solid rgb(236, 239, 241);
`;

export const DeleteFollowing = styled.div`
  opacity: 0.3;
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  transition: 0.4s all ease-in;

  &:hover {
    opacity: 1;
  }
  &:before,
  :after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 25px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const DashboardPortfolioSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 auto;
`;
export const DashboardFollowingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 auto;
`;

export const PortfolioHeader = styled.div`
  margin-left: 15px;
  font-size: 25px;
  font-weight: 600;
  color: rgba(5, 15, 25, 0.8);
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 54px;
  border-bottom: 1px solid rgb(236, 239, 241);
`;

export const PortfolioSeperator = styled.div`
  border-left: 4px solid rgb(236, 239, 241);
  margin: 40px 0;
`;

export const PortfolioList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PortfolioBalance = styled.div`
  display: flex;
  padding: 0 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Portfolioh1 = styled.h2`
  color: #4a4a4a;
  font-stretch: normal;
  line-height: 1.2;
  margin-bottom: 13px;
  font-weight: 400;
`;

export const PortfolioP = styled.p`
  font-size: 28px;
`;
export const DashboardPortfolioTop = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.mediaQueries.medium} {
  }
`;

export const DashboardPortfolioItems = styled.div`
  padding: 20px;

  border-bottom: 1px solid rgb(236, 239, 241);
  display: flex;
  flex-direction: row;
`;

export const DashboardLineWrapper = styled.div`
  flex-grow: 1;
  height: 20px;
  padding: 0 20px 0 0;
  width: 100px !important;
  display: flex;
  @media ${props => props.theme.mediaQueries.small} {
    display: none;
  }
`;

export const DashboardFollowingItems = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const DashboardFavoriteItems = styled.div`
  display: flex;

  flex-direction: column;
`;

export const FavoriteCoin = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  position: relative;
  border-collapse: collapse;
  border-bottom: 1px solid rgb(236, 239, 241);
`;

export const FavoriteCoinPrice = styled.p`
  flex-grow: 2;
  margin-left: 12px;
`;

export const LogoAndNameWrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  margin-left: 12px;
  align-items: center;
  flex: 1 1 auto;
`;
