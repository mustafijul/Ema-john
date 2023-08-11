import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Products/Product";
const Shop = () => {


  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
           key={product.id}
           product = {product}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <h4>Carts here</h4>
      </div>
    </div>
  );
};

export default Shop;
