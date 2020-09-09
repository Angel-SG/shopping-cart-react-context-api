import React, { useEffect, useState } from "react";
import Product from "./product-item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  console.log(products);
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Product
              img={product.image}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductsList;