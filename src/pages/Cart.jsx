import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context';
import CartItem from '../components/CartItem';
import { useState } from 'react';
import { useAlert } from "react-alert";

const Cart = () => {
  const { cartItems, emptyCart} = useContext(Context);
  const totalPrice = cartItems.length * 120;
  const [btnText,setBtnText] = useState("Place Order");
  const alert = useAlert();

  function placeOrder(){
    setBtnText("Ordering...");
    setTimeout(() => {
      alert.success("Order placed successfully...")
      setBtnText("Place Order");
      emptyCart();
    },3000);
  }

  return (
    <div className='cart_container'>
      <h2>Checkout</h2>
      <div className="cart_main">
        {
          cartItems.map((item,index) => {
            return (
              <CartItem key={item.id} item={item} index={index}/>
            )
          })
        }
        { cartItems.length 
          ? <h4>Grand Total:  
              <span className='price_gold'>
                &nbsp;{totalPrice.toLocaleString('en-IN', { maximumSignificantDigits: 3 })}
              </span>
            </h4>
          : <h4 style={{display:"flex",justifyContent:"center"}}>Empty Cart. Please add items to the cart</h4>}
        
        <div className="btn_wrapper">
          {cartItems.length > 0 && <button className='orderBtn' onClick={placeOrder}>{btnText}</button>}
        </div>
      </div>
    </div>
  )
}

export default Cart