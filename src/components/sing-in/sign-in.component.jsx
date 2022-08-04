import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.style';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

const SignIn = () => {

  const dispatch = useDispatch()

  const [userCredentians, setUserCredentials] = useState({ email: '', password: ''})

  const { email, password } = userCredentians

  const handleSubmit = async event => {
      event.preventDefault()
      dispatch(emailSignInStart({ email, password }))
  }
  
  const handleChange = event => {
    const { value, name } = event.target;  
    setUserCredentials({ ...userCredentians, [name]: value });
  }
        return(
            <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
    
            <form onSubmit={handleSubmit}>
              <FormInput
                name='email'
                type='email'
                handleChange={handleChange}
                value={email}
                label='email'
                required
              />
              <FormInput
                name='password'
                type='password'
                value={password}
                handleChange={handleChange}
                label='password'
                required
              />
              <ButtonsBarContainer>
                <CustomButton type='submit'> Sign in </CustomButton>
                <CustomButton type='button' onClick={() => dispatch(googleSignInStart())} isGoogleSignIn>
                  Sign in with Google
                </CustomButton>
              </ButtonsBarContainer>
            </form>
          </SignInContainer>
        )
}

export default SignIn