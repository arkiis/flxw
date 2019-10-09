import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  background: white;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding: 40px 20px 20px 20px;
`;

export const FooterContainer = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  flex: 1 1 auto;
  color: slate;
  overflow: hidden;
  text-align: left;

  & :not(img):not(h3) {
    margin-top: 30px;
  }

  > a {
    margin-top: 5px !important;
  }

  > p {
  }
  > img {
    width: 160px;
  }
`;
