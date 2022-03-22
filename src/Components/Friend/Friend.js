import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Friend.css'
const Friend = (props) => {
    // console.log(props)
    const{ img, name ,id,home,schoolCollage,mobile }=props.friend ||{}
    
   
    return (
       
            <div className="cart-container">
          <img className="ima-style" src={img} alt="" />
            <h2> name:{name} </h2>
            <h4>id:{id}</h4>
            <h3>home:{home}</h3>
            <p>University:{schoolCollage}</p>
            <h5>Mobile:{mobile}</h5>
            <button
            onClick={()=> props.handelAddtoCart(props.friend)}
             className="btn-regular"
              > {<FontAwesomeIcon icon={faShoppingCart} />}Add to cart</button>
             
       </div>
    );
};

export default Friend;