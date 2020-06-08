import React from "react";
import styled from "styled-components";

export const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  /* background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%); */
  /* background-size: 400% 400%; */
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background: linear-gradient(-90deg, #f0f0f0 60%, #f8f8f8 0%, #f0f0f0 20%);
    }
    100% {
      background: linear-gradient(
        -90deg,
        #f0f0f0 0%,
        #f8f8f8 50%,
        #f0f0f0 100%
      );
    }
  }
`;

export const SSkeletonLine = styled(SSkeletonPulse)`
  width: 5.5em;
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
`;

export const SkeletonLine = () => {
  return <SSkeletonLine />;
};
