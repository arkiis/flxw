import styled from "styled-components";

export const TableContainer = styled.div`
  z-index: 10;
  width: 100%;
  flex-direction: column;
  display: flex;
  max-width: 1142px;

  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
  }
`;

export const MobileTableContainer = styled.div`
  z-index: 10;
  width: 100%;
  flex-direction: column;
  display: none;
  max-width: 1142px;

  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
  }
`;

export const CoinIcon = styled.img`
  width: ${({ width }) => (width ? "12px" : "36px")};
  height: ${({ height }) => (height ? "12px" : "36px")};
  margin-right: ${({ marginR }) => (marginR ? "12px" : "")};
`;

export const MarketCap = styled.div`
  display: flex;
  align-items: center;
  transition: all ease 0.2s;
  &:hover {
    color: #6433ff;
    cursor: pointer;
    transition: all ease 0.2s;
  }
`;

export const Tablestyles = styled.table`
  border-radius: 4px;
  text-align: left;
  border-collapse: collapse;
  border: 1px solid;
  border-color: rgb(236, 239, 241);
  width: 100%;
  box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
  background: white;

  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
    flex-direction: column;

    flex: 1 1 auto;
  }
`;

export const TableRowStyles = styled.tr`
  border-bottom: 1px solid #1c162110;

  &:hover {
    background: ${({ bg }) => (bg ? "" : "#b3b3b320")};
  }
  @media ${props => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

export const MobileTableRowStyles = styled.tr`
  border-bottom: 1px solid #1c162110;
  justify-content: space-evenly;

  &:hover {
    background: ${({ bg }) => (bg ? "" : "#b3b3b320")};
  }
  @media ${props => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

export const TradeTableRowStyles = styled.tr`
  border-bottom: 1px solid #1c162110;

  &:hover {
    background: ${({ bg }) => (bg ? "" : "#b3b3b320")};
  }
  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
  }
`;
export const TradeSummaryRowStyles = styled.tr`
  border-bottom: 1px solid #1c162110;
  display: flex;
  justify-content: space-around;
  &:hover {
    background: ${({ bg }) => (bg ? "" : "#b3b3b320")};
  }
  @media ${props => props.theme.mediaQueries.medium} {
    padding: 10px;
  }

  &:hover {
    background: ${({ bg }) => (bg ? "" : "#b3b3b320")};
  }
  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
  }
`;

export const MobileRowStyles = styled.tr`
  border-bottom: 1px solid #1c162110;
  display: none;
  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
  }
`;

export const TabelDataStyles = styled.td`
  color: ${({ negative, positive, gray, matte }) => {
    if (negative) return "red";
    if (positive) return "#06D6A0";
    if (gray) return "#1c162198";
    if (matte) return "#4A4A4A";
    else return "black";
  }};
  display: ${({ flex }) => (flex ? "flex" : "")};
  font-size: 20px;
  font-size: ${({ size }) => (size ? "15px" : "")};
  padding: 22px;
  font-weight: ${({ bold }) => (bold ? "600" : "")};
  padding-left: 32px;

  > td {
    color: gray;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    display: ${({ none }) => (none ? "none" : "unset")};
    padding: ${({ zero }) => (zero ? "2px" : "22px")};
    padding-left: ${({ zero }) => (zero ? "2px" : "32px")};
  }
`;
export const TableDataP = styled.p`
  margin-left: 10px;
  font-weight: 500;
`;
export const TabelHeadingStyles = styled.th`
  padding: 21px 12px 21px 32px;
  color: #33333370;
  font-size: 15px;
  border-collapse: collapse;
  @media ${props => props.theme.mediaQueries.medium} {
    display: ${({ none }) => (none ? "none" : "unset")};
    padding: ${({ zero }) => (zero ? "18px 18px" : "21px 12px 21px 32px")};
  }
`;
