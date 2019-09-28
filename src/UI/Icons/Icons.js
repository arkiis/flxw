import React from "react";
import styled from "styled-components";
import SvgIcon from "../../assets/images/connectdevelop-brands.svg";

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 14px;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

const IconImage = styled.img`
  margin-top: -8px;
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  margin-right: 28px;
  background-color: white;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-shadow: rgba(218, 225, 233, 0.557) 0px 8px 16px;
  border-radius: 50%;
`;
const IconContent = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;

  > p {
    margin-top: 14px;
    color: black;
    opacity: 0.5;
    font-weight: 500;
  }
`;

const Icons = () => {
  return (
    <IconWrapper>
      <Icon>
        <IconImage src={SvgIcon} />
        <IconContent>
          <h3>Manage your portfolio</h3>
          <p>
            Buy and sell popular digital currencies, keep track of them in the
            one place.
          </p>
        </IconContent>
      </Icon>
      <Icon>
        <IconImage src={SvgIcon} />
        <IconContent>
          <h3>Manage your portfolio</h3>
          <p>
            Buy and sell popular digital currencies, keep track of them in the
            one place.
          </p>
        </IconContent>
      </Icon>
      <Icon>
        <IconImage src={SvgIcon} />
        <IconContent>
          <h3>Manage your portfolio</h3>
          <p>
            Buy and sell popular digital currencies, keep track of them in the
            one place.
          </p>
        </IconContent>
      </Icon>
      <Icon>
        <IconImage src={SvgIcon} />
        <IconContent>
          <h3>Manage your portfolio</h3>
          <p>
            Buy and sell popular digital currencies, keep track of them in the
            one place.
          </p>
        </IconContent>
      </Icon>
    </IconWrapper>
  );
};

export default Icons;