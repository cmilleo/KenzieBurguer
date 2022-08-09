import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  max-width: 365px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 5px;
  height: ${({ cartEmpty }) => (cartEmpty ? "auto" : "535px")};
  background-color: var(--gray1);

  h2 {
    width: 100%;
    padding: 1.5rem;
    height: 65px;
    background-color: var(--primary);
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }
  .cartEmpty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150px;
    background: var(--gray1);
    width: 100%;
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--gray3);
    }
  }

  .flexCart {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ itensCart }) => (itensCart ? "20px 0" : "0")};
    gap: 20px;
    height: 320px;
    overflow-x: auto;
    padding: 20px 0;
  }

  .containerCartFooter {
    margin: 0 auto;
    width: 90%;
    border-top: 2px solid var(--gray2);

    .totalPrice {
      display: flex;
      justify-content: space-between;
      height: 60px;
      align-items: center;
      h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--gray4);
      }
      span {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--gray3);
      }
    }
    button {
      height: 60px;
    }
  }
  @media screen and (min-width: 768px) {
    .flexCart {
      &::-webkit-scrollbar {
        width: 8px;
        background: var(--gray2);
      }
      &::-webkit-scrollbar-thumb {
        background: var(--gray3);
        border-radius: 3px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    max-width: 300px;
    height: ${({ cartEmpty }) => (cartEmpty ? "200px" : "535px")};
  }
  @media screen and (min-width: 1600px) {
    max-width: 365px;
  }
`;
