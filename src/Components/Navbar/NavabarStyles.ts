import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: rgb(224, 224, 224);
  }
`;

export const Navigation = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: min-content min-content;
  grid-column-gap: 10px;
  justify-content: right;
`;
