import styled from "styled-components";

export const Container = styled.ul`
  min-width: 300px;
  list-style: none;
  height: 347px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  &:hover {
    border: 2px solid var(--gray4);
    transform: scale(1.1);
  }
  .imgContainer {
    background-color: var(--gray2);
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img {
      position: absolute;
      bottom: 5%;
      width: 162px;
      height: 162px;
      object-fit: contain;
    }
  }
  .infoCard {
    height: 196px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 20px;

    h3 {
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      color: var(--gray4);
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: var(--gray3);
    }
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: var(--primary);
    }
    button {
      font-size: 0.9rem;
    }
  }
  @media screen and (min-width: 1024px) {
    min-width: 250px;
  }
  @media screen and (min-width: 1366px) {
    min-width: 280px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 300px;
  }
`;
