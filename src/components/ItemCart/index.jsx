import React from "react";
import { toast } from "react-toastify";

import { Container } from "./styles";

const ItemCart = ({ product, setItensCart, setCartEmpty }) => {
  const { name, img, category, id } = product;

  function handleRemove(id) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart.filter((product) => product.id !== id);

    localStorage.setItem("cart", JSON.stringify(newCart));

    if (newCart.length === 0) {
      setCartEmpty(true);
    }

    setItensCart(newCart);
    toast.success("Produto removido com sucesso!");
  }

  return (
    <Container>
      <li className="imgCart">
        <img src={img} alt={name} />
      </li>
      <li className="infoCart">
        <h3>{name}</h3>
        <span>{category}</span>
      </li>
      <li className="btnRemoveCart">
        <button onClick={() => handleRemove(id)}>Remover</button>
      </li>
    </Container>
  );
};

export default ItemCart;
