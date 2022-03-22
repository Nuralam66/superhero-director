import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Friend from '../Friend/Friend';
import'./Member.css'
const Member = () => {
    const [friends, setFriends] =useState([])
    const [cart,setCart ]=useState([])

    useEffect(()=>{
        fetch('./friends.json')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])

    const handelAddtoCart=(friend) =>{
        const newCart=[...cart,friend]
        setCart(newCart)
    }

    return (
        <div  className="member-container" >
            <div  >
                <h1>Member:{friends.length}</h1>
              <div className="friend-container" >
              {
                    friends.map(friend=> <Friend 
                        handelAddtoCart={handelAddtoCart}
                        friend={friend} ></Friend>)
                }
              </div>
            </div>
            <div className="cart-container" >
            <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Member;