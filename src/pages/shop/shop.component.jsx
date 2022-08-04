import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'

import { ShopPageContainer } from './shop.style'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

const ShopPage = () => {
  
  const dispatch = useDispatch()
  const params = useParams()
  const collectionKey = params['*']
    
  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch])

    return (
      <ShopPageContainer>
      <Routes>
        <Route exact path="/" element={<CollectionsOverviewContainer />}/>
        <Route path={`/${collectionKey}`} element={<CollectionPageContainer collectionKey={collectionKey}/>}/>       
      </Routes>
    </ShopPageContainer>
    )
}

export default ShopPage
