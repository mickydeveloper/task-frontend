import styled from "styled-components";

export const TransactionFormWrapper = styled.form`
  background-color: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: relative;
  grid-area: rightArea;
`;

export const SubmitWrapper = styled.input`
  border: none;
  padding: 0.6rem;
  cursor: pointer;
  border-radius: 4px;
  color: white;
  background: #1f3869;
  transition: 0.4s all;
  margin-top: 0.4rem;
  display: block;

  &:hover {
    background: #335aa8;
    transition: 0.4s all;
  }
`;
