import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Products/Product";
const Shop = () => {


  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(" https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart)
    
}

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
           key={product.id}
           product = {product}
           handleAddToCart ={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <h4>Carts here</h4>
        <p>selected items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
