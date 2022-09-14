import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


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

            </div>
            <button onClick={() => addToCart(product)} className='button'><p className='button-text'>
                Add To Cart
            </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;