import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 20px;
  .resultFilter {
    height: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    p {
      font-weight: 700;
      font-size: 26px;
      line-height: 34px;
      color: var(--gray4);
    }
    span {
      font-weight: 700;
      font-size: 26px;
      line-height: 34px;
      color: var(--gray3);
    }
  }
  @media screen and (min-width: 1024px) {
    .containerPrincipal {
      display: flex;
      width: 90%;
      margin: 0 auto;
      margin-top: 1rem;
    }
  }
  @media screen and (min-width: 1600px) {
    .containerPrincipal {
      display: flex;
      width: 85%;
      margin: 0 auto;
      margin-top: 1rem;
    }
    .resultFilter {
      width: 85%;
    }
  }
  @media screen and (min-width: 1700px) {
    .containerPrincipal {
      width: 80%;
    }
    .resultFilter {
      width: 80%;
    }
  }
  @media screen and (min-width: 1800px) {
    .containerPrincipal {
      width: 77%;
    }
    .resultFilter {
      width: 77%;
    }
  }
  @media screen and (min-width: 1900px) {
    .containerPrincipal {
      width: 73%;
    }
    .resultFilter {
      width: 73%;
    }
  }
  @media screen and (min-width: 2000px) {
    .containerPrincipal {
      width: 68%;
    }
    .resultFilter {
      width: 68%;
    }
  }
`;
