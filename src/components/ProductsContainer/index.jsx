import React from "react";
import Product from "../Product";
import { Container } from "./styles";

const ProductsContainer = ({ products, filter, handleCart }) => {
  return (
    <Container>
      {filter
        ? filter.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleCart={handleCart}
            />
          ))
        : products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleCart={handleCart}
            />
          ))}
    </Container>
  );
};

export default ProductsContainer;
