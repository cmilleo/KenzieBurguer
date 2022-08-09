import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --toastify-color-info : #155BCB ; 
    --toastify-color-success : #168821 ; 
    --toastify-color-warning : #FFCD07 ; 
    --toastify-color-error : #E60000 ;
    --primary: #27AE60 ;
    --primary-hover: #93D7AF ;
    --gray1: #F5F5F5 ;
    --gray2: #E0E0E0 ;
    --gray3: #828282 ;
    --gray4: #333333 ;
}
body{
    height: 100vh;
    width: 100vw;
}
button{
    cursor: pointer;
}
*{

    font-family: 'Inter', sans-serif;

    box-sizing: border-box;
    margin: 0;
    padding: 0;

}
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "flex-start"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  background: url(${(props) => props.backgroundImage});
`;

export const ButtonPrimary = styled.button`
  background: var(--primary);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-weight: 600;
  padding: 0 1rem;
  transition: 0.3s;

  width: ${(props) => (props.width ? props.width : "100%")};
  height: 40px;

  border: none;
  border-radius: 8px;
  font-size: 1rem;
  color: white;
  &:hover {
    background: var(--primary-hover);
  }
`;

export const ButtonSecundary = styled.button`
  background: var(--gray2);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-weight: 600;
  padding: 0 1rem;
  transition: 0.3s;

  width: ${(props) => (props.width ? props.width : "100%")};
  height: 40px;

  border: none;
  border-radius: 8px;
  font-size: 1rem;
  color: var(--gray3);
  &:hover {
    background: var(--gray3);
    color: var(--gray2);
  }
`;
