import styled from "styled-components";

export const ToasterWrapper = styled.div<{
  $success: boolean;
  $display: boolean | null;
}>`
  font-weight: 300;
  position: fixed;
  min-width: 200px;
  color: white;
  padding: 0.3rem 0.6rem;
  bottom: 4rem;
  right: 10vw;
  z-index: 3;
  transition: all 0.4s;
  border-radius: 4px;
  box-shadow: 3px 3px 8px #bbbbbb;

  background: ${({ $success }) => ($success ? "green" : "red")};
  display: ${({ $display }) => ($display !== null ? "block" : "none")};
`;
