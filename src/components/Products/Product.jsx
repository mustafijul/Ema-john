import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>Name: {name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Ratings: {ratings}</p>
            </div>
            <button className='cart-btn'>Add to cart</button>
        </div>
    );
};

export default Product;