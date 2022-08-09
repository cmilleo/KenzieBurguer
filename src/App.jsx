import Header from "./components/Header";
import Api from "./data/Api";
import { Container } from "./styles/styles";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ProductsContainer from "./components/ProductsContainer";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState();
  const [loading, setLoading] = useState(false);
  const [itensCart, setItensCart] = useState([]);

  useEffect(() => {
    setLoading(true);
    Api.get("products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        toast.error("Erro ao buscar produtos");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleFilter(input) {
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(input.toLowerCase());
    });

    if (filtered.length > 0) {
      setFilter(filtered);
    } else {
      toast.error("Nenhum produto encontrado");
    }
  }

  function handleCart(id) {
    const product = products.find((product) => product.id === id);

    const cart = localStorage.getItem("cart");
    let cartArray = [];

    if (cart) {
      cartArray = JSON.parse(cart);
    }
    if (cartArray.find((product) => product.id === id)) {
      toast.error("Produto já adicionado ao carrinho");
    } else {
      cartArray.push(product);
      localStorage.setItem("cart", JSON.stringify(cartArray));
      setItensCart(cartArray);
      toast.success("Produto adicionado ao carrinho");
    }
  }

  return (
    <Container>
      <Header handleFilter={handleFilter} />
      <div className="containerPrincipal">
        {!loading ? (
          <ProductsContainer
            filter={filter}
            products={products}
            handleCart={handleCart}
          />
        ) : (
          <h1>Carregando...</h1>
        )}
        <Cart itensCart={itensCart} setItensCart={setItensCart} />
      </div>
    </Container>
  );
}

export default App;
