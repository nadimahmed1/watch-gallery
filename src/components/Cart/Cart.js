import React, { useEffect, useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, products, removeHandle } = props
    const [offer, setOffer] = useState(false)

    console.log(offer)
    const [freeProduct, setFreeProduct] = useState({});

    const handleOffer = () => {

        const randomNumber = Math.floor(Math.random() * products.length);
        const item = products[randomNumber];
        setFreeProduct(item)

    }

    useEffect(() => {
        if (cart.length > 0) {
            setOffer(true)
        }
        else {
            setOffer(false)
        }
    }, [cart]);


    return (
        <div className='cart'>
            <h2 className='order'>Order Summary </h2>
            {
                cart.map((product, index) => (
                    < div key={index} className='cart-item' >
                        <img src={product.img} alt="" />
                        <div>
                            <p>
                                {product.name} {product.color}
                            </p>
                            <p>${product.price * product.quantity}</p>
                            <p>{product.quantity}</p>
                        </div>
                    </div>
                ))
            }
            <p className='buy'>Buy one get one free</p>
            <button onClick={handleOffer} className={offer ? 'offer-button' : 'offer-button-disabled'} disabled={!offer}>Get One for me</button>
            <button onClick={removeHandle} className='offer-button'>Choose Again</button>
            {Object.keys(freeProduct).length > 0 && < div className='cart-item' >

                <img src={freeProduct.img} alt="" />
                <div>
                    <p>
                        {freeProduct.name} {freeProduct.color}
                    </p>
                    <p>${freeProduct.price}</p>
                </div>
            </div>}
        </div >
    );
};

export default Cart;