import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: var(--gray1);
  height: 139px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 1rem;

    .divInput {
      width: 95%;
      position: relative;
      height: 60px;
      padding: 0;
      max-width: 380px;
      button {
        position: absolute;
        width: 107px;
        right: 3%;
        top: 0;
        bottom: 0;
        margin: auto 0;
        height: 40px;
      }
      input[type="text"] {
        height: 60px;
        width: 100%;
        border-radius: 8px;
        background-color: #fff;
        border: 2px solid var(--gray2);

        padding: 20px;

        &::placeholder {
          color: var(--gray2);
        }
        &:hover::placeholder {
          color: var(--gray3);
        }

        &:hover {
          border: 2px solid var(--gray4);
          color: var(--gray3);
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    height: 80px;
    div {
      width: 80%;
      flex-direction: row;
      margin: 0 auto;
      height: 100%;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 80px;
    div {
      width: 90%;
      flex-direction: row;
      margin: 0 auto;
      justify-content: space-between;
      height: 100%;
    }
    .divInput {
      margin: 0;
    }
  }
  @media screen and (min-width: 1600px) {
    div {
      width: 85%;
    }
  }
  @media screen and (min-width: 1700px) {
    div {
      width: 80%;
    }
  }
  @media screen and (min-width: 1800px) {
    div {
      width: 75%;
    }
  }
  @media screen and (min-width: 1900px) {
    div {
      width: 70%;
    }
  }
  @media screen and (min-width: 2000px) {
    div {
      width: 65%;
    }
  }
`;
