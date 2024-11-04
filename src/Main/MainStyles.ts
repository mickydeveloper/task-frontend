import styled from "styled-components";

export const MainWrapper = styled.main`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 2rem 10vw;
  box-sizing: border-box;
  grid-template-areas:
    "leftArea rightArea"
    "myArea myArea";

  @media screen and (max-width: 480px) {
    grid-column-gap: 0;
    grid-row-gap: 0.5rem;
    padding: 1rem;
    grid-template-areas:
      "rightArea rightArea"
      "leftArea leftArea"
      "myArea myArea";
  }
`;
