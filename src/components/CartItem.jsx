import React from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { Context } from '../Context';
import useHover from '../hooks/useHover';

const CartItem = ({ item, index}) => {
    const { removeFromCart } = useContext(Context);
    const [hovered,ref] = useHover();

    const trashClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
    return (
        <div className='cart_item_container'>
            <div className="cart_item">
                <i 
                    className={trashClassName} 
                    ref={ref}
                    onClick={() => removeFromCart(item.id)}>
                </i>
                <h3>{index+1}</h3>
                <img src={item.src} alt="" />
                <h3 className='price'>Price: <span className='price_gold'>120</span></h3>
            </div>
            <hr />
        </div>
    )
}

export default CartItem