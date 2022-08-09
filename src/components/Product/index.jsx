import React from "react";
import { Container } from "./styles";
import { ButtonPrimary } from "../../styles/GlobalStyles";
const Product = ({ product, handleCart }) => {
  const { category, name, img, price, id } = product;

  return (
    <Container>
      <li className="imgContainer">
        <img src={img} alt={name} />
      </li>
      <li className="infoCard">
        <h3>{name}</h3>
        <p>{category}</p>
        <span>R$ {String(price).length > 2 ? price : `${price}.00`}</span>
        <ButtonPrimary width="106px" onClick={() => handleCart(id)}>
          Adicionar
        </ButtonPrimary>
      </li>
    </Container>
  );
};

export default Product;
