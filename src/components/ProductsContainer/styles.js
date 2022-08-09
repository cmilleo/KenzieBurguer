import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 410px;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 0 1rem;
  gap: 20px;
  display: flex;
  align-items: center;
  &::-webkit-scrollbar {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  @media screen and (min-width: 1024px) {
    flex-wrap: wrap;
    height: 100%;
    padding: 1rem;
  }
  @media screen and (min-width: 1366px) {
    gap: 20px;
  }
`;
