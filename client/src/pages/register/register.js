import React from 'react'
import { useHistory } from 'react-router-dom'

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
  const history = useHistory()

  return (
    <Layout>
      <LoginCard>
        <TitleContainer><Logo src={PlaidLogo} /><Title>DASHBOARD</Title></TitleContainer>
        <InputContainer>
          <Input label='Email' variant='outlined' fullWidth />
        </InputContainer>

        <InputContainer>
          <Input label='Password' type='password' variant='outlined' fullWidth />
        </InputContainer>

        <InputContainer>
          <Input label='Confirm Password' type='password' variant='outlined' fullWidth />
        </InputContainer>

        <ButtonContainer>
          <LoginButton variant="contained" color="primary">Create Account</LoginButton>
          <RegisterLink href='/'>
            Go back to sign in
          </RegisterLink>
        </ButtonContainer>
      </LoginCard>
    </Layout>
  )
}


export default Register