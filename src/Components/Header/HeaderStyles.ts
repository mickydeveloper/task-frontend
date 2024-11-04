import styled, { keyframes } from "styled-components";

export const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); },
  100% { transform: rotate(360deg); }
`;

export const AppLogo = styled.img`
  height: 50px;
  pointer-events: none;
  animation-name: ${rotateAnimation};
  animation-duration: 20s;
  animation-iteration-count: infinite;
`;

export const AppHeader = styled.header`
  background-color: #1f3869;
  min-height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 10vw;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1;
`;
