import React from 'react';
import Header from '../components/Header';
import Cartcontent from '../components/Cartcontent';

const Cart = () => {
    return (
        <div id="page">
            <Header />
            <div id="main-container">
                <Cartcontent />
            </div>
        </div>
    );
};

export default Cart;