import styled from "styled-components";

export const Tablestyles = styled.table`
  border-radius: 4px;
  text-align: left;
  border-collapse: collapse;
  border: 1px solid #1c162130;
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
  color: ${({ negative, positive }) => {
    if (negative) return "red";
    if (positive) return "green";
    else return "black";
  }};
  font-size: 20px;
  padding: 22px;
  padding-left: 32px;
`;
export const TabelHeadingStyles = styled.th`
  padding: 21px 12px 21px 32px;
  color: #b3b3b3;
`;

// export const TD = ({ children, negative, positive }) => {
//   return <TabelDataStyles>{children}</TabelDataStyles>;
// };
