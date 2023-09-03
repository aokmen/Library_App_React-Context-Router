// Header Style
import styled from "styled-components";
import Flex from "../../styles/Flex";

export const HeaderContainer = styled(Flex)`
  flex-direction: column;
`;

export const HeaderTitle = styled.h1`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.detailColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.7rem;
  }
`;

export const HeaderForm = styled.form`
  display: flex;
  width: 55%;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.3px);
  border: 1px solid rgba(15, 63, 42, 0.3);
  margin: 20px;
  background-color: ${({ theme }) => theme.colors.headerFormColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 90%;
    padding: 1rem;
  }
`;

export const SearchInput = styled.input`
  width: 55%;
  height: 3rem;
  border: none;
  outline: none;
  margin-top: 2rem;
  font-size: 2rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background-color: rgb(255, 255, 255, 0.5);
  text-indent: 10px;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    border-radius: 5px;
  }
`;

export const SelectBox = styled.select`
  border-radius: 3px;
  margin-top: 2rem;
  padding: 5px;
  height: 3rem;
  width: 40%;
  border: none;
  outline: none;
  font-size: 2rem;
  border-top-right-radius: 1rem;
  background-color: rgb(255, 255, 255, 0.8);
  border-bottom-right-radius: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    border-radius: 5px;
  }
`;

export const SearchBtn = styled.button`
  background-color: #e1f1dd;
  padding: 5px;
  outline: none;
  height: 3rem;
  border: none;
  margin: 1rem;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  :hover {
    background-color: ${({ theme }) => theme.colors.navbarBgColor};
  }
`;