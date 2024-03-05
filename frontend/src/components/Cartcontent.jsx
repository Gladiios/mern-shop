import React from 'react';

const Cartcontent = () => {
    
    return (
        <div className='cart-content'>
            <div className='cart-item-container'>
                <h3>Your cart is empty, add item !</h3>
                <p>continue your shopping <strong><a href="/">here</a></strong></p>
            </div>
            <div className="to-order">
                <p>Subtotal (x item): $ price</p>
                <button>Proceed to checkout</button>
            </div>
        </div>
    );
};

export default Cartcontent;