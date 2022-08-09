import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  height: 80px;
  list-style: none;
  width: 90%;
  margin: 0 auto;
  gap: 10px;
  .imgCart {
    min-width: 80px;
    min-height: 80px;
    max-width: 80px;
    max-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    background: var(--gray2);
    border-radius: 5px;

    img {
      width: 100%;
    }
  }
  .infoCart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    h3 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: var(--gray4);
    }

    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: var(--gray3);
    }
  }

  .btnRemoveCart button {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #bdbdbd;
    background: transparent;
    border: none;

    &:hover {
      text-decoration-line: underline;
      color: var(--gray4);
    }
  }
`;
