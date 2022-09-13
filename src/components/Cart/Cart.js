import React from 'react';

const Cart = (props) => {
    const { cart } = props
    return (
        <div>
            <h2>Order Summary </h2>
            <h6>Selected Item: {cart.length}</h6>

            {
                cart.map((product, index) => (

                    < div key={index} className='cart-item' >
                        <img src={product.img} alt="" />


                    </div>
                ))
            }
        </div >
    );
};

export default Cart;