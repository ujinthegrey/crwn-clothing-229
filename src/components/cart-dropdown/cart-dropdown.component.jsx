import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
/* 
  import { withRouter } from 'react-router-dom'
  не работаеет с v6
  нужно использовать useNavigate
  далее в уроке 227 стали использовать вместо withRouter
  useHistory но с v6 нудно использовать useNavigate вместо useHistory
 */
import { useNavigate } from "react-router-dom"

import CartItem from '../cart-item/cart-item.component'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.style'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        navigate('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>  
)};

export default CartDropdown