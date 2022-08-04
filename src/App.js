import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component'

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions';

const App = () => {

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {    
    dispatch(checkUserSession())
  }, [dispatch])

    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/shop//*' element={<ShopPage/>}/>          
          <Route exact path='/checkout' element={<CheckOutPage/>}/>
          <Route path = "/signin" element={!currentUser ? <SignInAndSignUpPage /> : <Navigate to='/' />} />
          <Route path='*' element={<h1>Oops! There is no such a page :-(</h1>}/>
        </Routes>
      </div>
  )
}

export default App;
