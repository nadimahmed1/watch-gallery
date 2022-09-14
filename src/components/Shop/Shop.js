import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (selectedProduct) => {
        let newCart = []
        const exist = cart.find((product) => product.id == selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter((product) => product.id != selectedProduct.id);
            selectedProduct.quantity = selectedProduct.quantity + 1;
            newCart = [...rest, selectedProduct]
        }

        setCart(newCart)

    }
    const removeHandle = () => {
        setCart([])
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}

                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    products={products}
                    removeHandle={removeHandle}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;