import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, SignUpTitle } from './sign-up.style';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = () => {

  const dispatch = useDispatch()

  const [userCredentians, setUserCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

  const { displayName, email, password, confirmPassword } = userCredentians

    const hamdleSunmit = async event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("paswords don't match")
            return
        }
        dispatch(signUpStart({ displayName, email, password }))
    }

    const handleChange = event => {
        const { name, value } = event.target
        setUserCredentials({ ...userCredentians, [name]: value })
    }

        return(
            <SignUpContainer>
            <SignUpTitle>I do not have a account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={hamdleSunmit}>
              <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Display Name'
                required
              />
              <FormInput
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
              />
              <FormInput
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
              />
              <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='Confirm Password'
                required
              />
              <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
          </SignUpContainer>
        )
}

export default SignUp