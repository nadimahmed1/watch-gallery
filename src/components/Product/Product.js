import React from 'react';
import './Product.css';


const Product = ({ product, addToCart }) => {

    const { img, price, id, color, name } = product;
    return (
        <div className='product'>
            <div className='images'>
                <img src={img} alt="" />
            </div>
            <div className='info'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p><h6>ID: {id}</h6></p>
                <h5>Color: {color}</h5>
            </div>
            <button onClick={() => addToCart(product)} className='button'>Add To Cart  /></button>
        </div>
    );
};

export default Product;