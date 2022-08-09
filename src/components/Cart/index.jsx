import React, { useEffect, useState } from "react";
import { ButtonSecundary } from "../../styles/GlobalStyles";
import { Container } from "./styles";
import ItemCart from "../ItemCart";
import { toast } from "react-toastify";
const Cart = ({ itensCart, setItensCart }) => {
  const [cartEmpty, setCartEmpty] = useState(true);
  const cart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    if (cart) {
      setCartEmpty(false);
    } else {
      setCartEmpty(true);
    }
  }, [cart]);

  useEffect(() => {
    if (itensCart.length <= 0) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
  }, [itensCart]);

  function handleDeleteAll() {
    setItensCart([]);
    setCartEmpty(true);
    localStorage.removeItem("cart");
    toast.success("Carrinho limpo com sucesso!");
  }

  return (
    <Container cartEmpty={cartEmpty}>
      <h2>Carrinho de compras</h2>
      {cartEmpty ? (
        <div className="cartEmpty">
          <h3>Sua sacola está vazia</h3>
          <span>Adicione itens</span>
        </div>
      ) : (
        <>
          <div className="flexCart">
            {(cart ? cart : itensCart).map((product) => (
              <ItemCart
                setCartEmpty={setCartEmpty}
                key={product.id}
                product={product}
                setItensCart={setItensCart}
              />
            ))}
          </div>
          <div className="containerCartFooter">
            <div className="totalPrice">
              <h4>Total</h4>
              <span>
                R${" "}
                {(cart ? cart : itensCart)
                  .reduce((total, product) => total + product.price, 0)
                  .toFixed(2)}
              </span>
            </div>
            <ButtonSecundary onClick={handleDeleteAll}>
              Remover todos
            </ButtonSecundary>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
