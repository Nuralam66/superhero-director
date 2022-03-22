import React from 'react';
import './Cart.css'

const Cart = (friend) => {
    const {cart}=friend;
    let totalMember='';
    for(const friend of cart){
        totalMember=totalMember+friend.name;
    }
    return (
        <div>
                <h3>Member Added: {friend.cart.length}</h3>
                <h3>total Cost :{friend.cart.mobile} </h3>
                <p> TotalMember:{totalMember}</p>
        </div>
    );
};

export default Cart;