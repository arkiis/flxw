import styled from "styled-components";

export const Container = styled.div`
  font-size: 18px;

  background-color: white;
  color: #1c1621;
  margin: 0;
  transition: all 0.3s ease-in-out 0s;
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: auto;
  border: 1px solid rgb(266, 239, 241);

  &:hover {
    border-color: #6433ff;
    color: #6433ff;
  }
`;

export const FollowIconContent = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  text-transform: uppercase;
  justify-content: center;
`;

export const FollowHeading = styled.p`
  font-weight: 300;
`;

export const IconImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
