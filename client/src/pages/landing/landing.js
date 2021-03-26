import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../../redux/actions/authActions'


// Assets
import PlaidLogo from '../../assets/plaid_logo.png'

// Styles
import {
  Layout,
  LoginCard,
  TitleContainer,
  Title,
  Logo,
  InputContainer,
  Input,
  ButtonContainer,
  LoginButton,
  RegisterLink,
} from './landing.styles'

const Landing = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const onChange = (e) => {
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    console.log('submitting info', userData)
    dispatch(loginUser(userData, history))
    console.log('successfuly dispatched', userData)
  }

  return (
    <Layout>
      <LoginCard onSubmit={onSubmit}>
        <TitleContainer><Logo src={PlaidLogo} /><Title>DASHBOARD</Title></TitleContainer>
        <InputContainer>
          <Input name='email' label='Email' variant='outlined' fullWidth onChange={onChange} />
        </InputContainer>

        <InputContainer>
          <Input name='password' label='Password' type='password' variant='outlined' fullWidth onChange={onChange} />
        </InputContainer>
        <ButtonContainer>
          <LoginButton type='submit' variant="contained" color="primary">Sign In</LoginButton>
          <RegisterLink href='/register'>
            REGISTER
          </RegisterLink>
        </ButtonContainer>
      </LoginCard>
    </Layout>
  )
}


export default Landing