import React from 'react'
import { useState, useContext } from 'react'
import { Context } from '../Context';
import images from '../assets/images';
import PropTypes from "prop-types";
import useHover from '../hooks/useHover';

const Image = ({ img }) => {
  // const [hovered, setHovered] = useState(false);
  const [hovered,ref] = useHover();
  const { toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context);

  const heartIcon = () => {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    } else if (hovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    }
  }
  const cartIcon = () => {
    const alreadyInCart = cartItems.some(item => item.id === img.id)
    if (alreadyInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
    } else if (hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    }
  }

  return (
    <div
      key={img.id}
      className='productDiv'
      ref={ref}>
      <img src={img.src} alt="" className='productImg' />
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}

images.propTypes = {
  img: PropTypes.shape({
    src:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    isFavorite:PropTypes.bool
  })
}

export default Image