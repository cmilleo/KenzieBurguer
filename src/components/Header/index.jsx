import React, { useState } from "react";
import { Container } from "./styles";
import logo from "../../assets/logo.svg";
import { ButtonPrimary } from "../../styles/GlobalStyles";
const Header = ({ handleFilter }) => {
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleClickSearch() {
    handleFilter(input);
  }

  return (
    <>
      <Container>
        <div>
          <img src={logo} alt="Logo kenzie hamburgueria" />
          <div className="divInput">
            <input
              onChange={handleInput}
              type="text"
              placeholder="Digitar Pesquisa"
            />
            <ButtonPrimary onClick={handleClickSearch}>Pesquisar</ButtonPrimary>
          </div>
        </div>
      </Container>
      {input ? (
        <div className="resultFilter">
          <p>
            Resultados para: <span>{input}</span>
          </p>
        </div>
      ) : null}
    </>
  );
};

export default Header;
