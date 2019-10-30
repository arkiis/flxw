import styled from "styled-components";

export const Track = styled.div`
  width: 100%;
  height: 15px;
  background-color: #1c1621;
  border-radius: 10px;
  box-shadow: inset 0 0 5px #000;
`;

export const Thumb = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background: #${props => props.background};
  border-radius: 8px;
  transition: width 1.3s ease-in-out;
`;

export const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  flex: 1 1 auto;
`;
export const ProgressItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  & :last-child {
    margin-left: 10px;
  }
`;
export const PHeading = styled.p`
  font-size: 19px;
  color: gray;
  margin-bottom: 12px;
`;
