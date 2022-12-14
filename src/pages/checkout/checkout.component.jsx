import React from 'react';
import { useSelector } from 'react-redux'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout.style';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckOutPage = () => {
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectCartTotal)
    return(
        <CheckoutPageContainer>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span>Product</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Description</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map((cartItem, idx) => (
          <CheckoutItem key={idx} cartItem={cartItem} />
        ))}
        <TotalContainer>
          <span>TOTAL: ${total}</span>
        </TotalContainer>
        <WarningContainer>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242  —  Exp: 01/20  —  CVV: 123
        </WarningContainer>
        <StripeCheckoutButton price={total} />
      </CheckoutPageContainer>
    )
}

export default CheckOutPage