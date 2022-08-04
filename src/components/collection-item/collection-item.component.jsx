import React from 'react';
import { useDispatch } from 'react-redux';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.style';

import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item }) => {

    const dispatch = useDispatch()

    const { name, price, imageUrl } = item
    return (
        <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => dispatch(addItem(item))} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default CollectionItem