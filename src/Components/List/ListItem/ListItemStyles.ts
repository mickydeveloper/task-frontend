import styled, { keyframes } from "styled-components";

export const deletedAnimation = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  80% { transform: translateX(-100vw); opacity: 0; }
  100% { transform: translateX(-100vw); opacity: 0; margin: 0; max-height: 0; margin: 0; padding: 0; }
`;

export const ItemWrapper = styled.li`
  background-color: #f5f5f5;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 100px;
  position: relative;
  transition: all 0.5s ease-in-out;

  &.deleted {
    animation: ${deletedAnimation} 0.5s forwards;
  }
`;

export const BeneficiaryWrapper = styled.h5`
  margin: 0;
  color: #1f3869;
  line-height: 1rem;
`;

export const InformationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const AccountNumberWrapper = styled.span`
  font-size: 0.85rem;
  color: #1f3869;
  word-break: break-word;
`;

export const AddressWrapper = styled.span`
  font-size: 0.8rem;
  color: #1f3869;
  font-weight: 500;
`;

export const DescriptionWrapper = styled.span`
  font-size: 0.9rem;
  color: #838383;
  line-height: 1rem;
  margin: 0.1rem 0 0.4rem;
`;

export const DateWrapper = styled.span`
  font-size: 0.7rem;
  color: #adadad;
`;

export const AmountWrapper = styled.div<{ $positive: boolean }>`
  font-size: 1.5rem;
  font-weight: 300;
  justify-content: right;
  align-items: center;
  display: flex;
  color: ${({ $positive }) => ($positive ? "green" : "red")};
`;

export const DeleteWrapper = styled.button`
  position: absolute;
  color: red;
  cursor: pointer;
  top: 0;
  right: 0.5rem;
  font-size: 1.2rem;
  list-style: 1rem;
  font-weight: 300;
  border: none;
  background-color: #f5f5f5;
`;
