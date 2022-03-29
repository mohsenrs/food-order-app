import React from 'react'

export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
})

function CartProvider(props) {
  const addItemToCartContext = (item) => {}

  const removeItemFromCartContext = (id) => {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartContext,
    removeItem: removeItemFromCartContext,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
