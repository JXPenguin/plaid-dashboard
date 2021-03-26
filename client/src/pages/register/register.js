import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../../redux/actions/authActions'

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
} from './register.styles'

const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const onChange = (e) =>  {
    const value = e.target.value;
    setNewUserData({
      ...newUserData,
      [e.target.name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser(newUserData, history))
    console.log('submitting info', newUserData)
  }

  return (
    <Layout>
      <LoginCard onSubmit={onSubmit}>
        <TitleContainer><Logo src={PlaidLogo} /><Title>DASHBOARD</Title></TitleContainer>
        <InputContainer>
          <Input name='name' label='Name' variant='outlined' fullWidth onChange={onChange} />
        </InputContainer>

        <InputContainer>
          <Input name='email' label='Email' variant='outlined' fullWidth onChange={onChange} />
        </InputContainer>

        <InputContainer>
          <Input name='password' label='Password' type='password' variant='outlined' fullWidth onChange={onChange} />
        </InputContainer>

        <InputContainer>
          <Input name='password2' label='Confirm Password' type='password' variant='outlined' fullWidth onChange={onChange} />
        </InputContainer>

        <ButtonContainer>
          <LoginButton type='submit' variant="contained" color="primary">Create Account</LoginButton>
          <RegisterLink href='/'>
            Go back to sign in
          </RegisterLink>
        </ButtonContainer>
      </LoginCard>
    </Layout>
  )
}


export default Register