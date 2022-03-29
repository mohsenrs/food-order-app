import React, { useContext } from 'react'
import './headerCartButton.scss'
import CartIcon from './../Cart/CartIcon'
import { CartContext } from './../../store/CartProvider'

function HeaderCartButton() {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount
  }, 0)

  return (
    <button className='button'>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
