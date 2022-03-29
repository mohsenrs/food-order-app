import React from 'react'
import './cart.scss'
import Modal from './../UI/Modal'

function Cart(props) {
  const cartItems = (
    <ul className='cart-items'>
      {[{ id: 'c1', name: 'sushi', amount: '2', price: '12,99' }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  )

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <span>32.52</span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={props.onHideCart}>
          Close
        </button>
        <button className='button'>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
