import styled from "styled-components";

export const SearchBarMainContainer = styled.div`
  display: flex;

  margin-bottom: 23px;
`;
export const SearchBarInput = styled.input`
  border: none;
  /* width: ${({ L }) => (L ? "40px" : "100%")}; */
  width: ${props => props.width};
  font-size: ${({ XL }) => (XL ? "46px" : "")};
  opacity: 0.6;
  &::placeholder {
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
export const SearchInputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid;
  border-color: rgb(236, 239, 241);
  box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
  padding: 22px 32px;
  align-items: center;
`;
export const SearchPriceChange = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media ${props => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

export const MobileSearchPriceChange = styled.select`
  display: none;
  padding-right: 4px;
  border-style: none;
  background: white;
  align-items: center;
  flex-direction: row;
  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
  }
`;

export const SearchPriceChangeItems = styled.span`
  margin: 0 5px;
  font-size: 14px;
  color: gray;

  cursor: pointer;
  &:focus {
    color: blue;
  }
`;
export const MobileSearchPriceChangeItems = styled.option`
  margin: 0 5px;
  font-size: 14px;
  color: gray;

  cursor: pointer;
  &:focus {
    color: blue;
  }
`;
