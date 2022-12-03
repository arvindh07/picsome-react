import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { Context } from '../Context';

const Header = () => {
    const {cartItems} = useContext(Context);
    const cartClassName = cartItems.length ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x";
    return (
        <div className='header_container'>
            <Link to="/">
                <h2>PICSOME</h2>
            </Link>
            <Link to="/cart">
                <i className={cartClassName}></i>
            </Link>
        </div>
    )
}

export default Header