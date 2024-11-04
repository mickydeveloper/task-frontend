import styled from "styled-components";

export const FilterInput = styled.input`
  width: 150px;
  border: none;
  border-radius: 4px;
  padding: 8px;
  color: #838383;

  @media screen and (max-width: 480px) {
    width: -webkit-fill-available;
  }
`;
