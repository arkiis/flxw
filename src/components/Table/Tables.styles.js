import styled from "styled-components";

export const TableContainer = styled.div`
  z-index: 10;
  width: 100%;
  flex-direction: column;
  display: flex;
  max-width: 1142px;
`;

export const CoinIcon = styled.img`
  width: ${({ width }) => (width ? "12px" : "36px")};
  height: ${({ height }) => (height ? "12px" : "36px")};
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
`;

export const TableRowStyles = styled.tr`
  border-bottom: 1px solid #1c162110;

  &:hover {
    background: ${({ bg }) => (bg ? "" : "#b3b3b320")};
  }
`;

export const TabelDataStyles = styled.td`
  color: ${({ negative, positive, grey }) => {
    if (negative) return "red";
    if (positive) return "green";
    else return "black";
  }};
  display: ${({ flex }) => (flex ? "flex" : "")};
  font-size: 20px;
  padding: 22px;
  padding-left: 32px;

  > td {
    color: gray;
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
`;

// export const TD = ({ children, negative, positive }) => {
//   return <TabelDataStyles>{children}</TabelDataStyles>;
// };
