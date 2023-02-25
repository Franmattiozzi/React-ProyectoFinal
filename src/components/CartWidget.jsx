import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const CartWidget = () => {
  return (
    <div className="cart-widget">
    <FontAwesomeIcon icon="fa-regular fa-dumbbell" />
    <div className="qty-display">0</div>
    </div>  
  );
};

export default CartWidget;