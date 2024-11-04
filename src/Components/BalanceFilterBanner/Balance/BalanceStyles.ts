import styled from "styled-components";

export const BalanceWrapper = styled.div<{ $positive?: boolean }>`
  font-size: 3.5rem;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0 0 1rem;
  min-height: 70%;

  color: ${(props) => (props.$positive ? "green" : "red")};
`;
