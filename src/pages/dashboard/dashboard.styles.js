import styled from "styled-components";

export const DashboardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
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
`;
export const DashboardFollowing = styled.div`
  display: flex;
  flex-direction: column;
  width: 558px;

  background: white;
  border-radius: 5px;
`;
export const FollowingSection = styled.div`
  display: flex;
  height: 300px;
  margin-bottom: 40px;
  box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
  border: 1px solid rgb(236, 239, 241);
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
`;

export const DashboardPortfolioItems = styled.div`
  padding: 20px;

  border-bottom: 1px solid rgb(236, 239, 241);
  display: flex;
  flex-direction: row;
`;

export const DashboardFollowingItems = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;
