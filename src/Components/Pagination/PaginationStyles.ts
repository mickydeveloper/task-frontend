import styled from "styled-components";

export const PaginationWrapper = styled.ul`
  list-style: none;
  display: flex;
  position: fixed;
  z-index: 3;
  bottom: 50px;
  background: white;
  width: 100vw;
  left: 0;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

export const PageWrapper = styled.li`
  background: #f5f5f5;
  padding: 0.3rem 0.6rem;
  margin: 0.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover,
  &.active {
    background: #1f3869;
    color: white;
    transition: all 0.4s;
  }
`;
