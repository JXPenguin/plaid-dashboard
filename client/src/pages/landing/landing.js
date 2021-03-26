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
} from './landing.styles'

const Landing = () => {
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
        <ButtonContainer>
          <LoginButton variant="contained" color="primary">Sign In</LoginButton>
          <RegisterLink href='/register'>
            REGISTER
          </RegisterLink>
        </ButtonContainer>
      </LoginCard>
    </Layout>
  )
}


export default Landing