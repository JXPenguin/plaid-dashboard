import React from 'react'
import { useHistory } from 'react-router-dom'

import { TextField } from '@material-ui/core'


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
} from './landing.styles'

const Landing = () => {
  const history = useHistory()

  return (
    <Layout>
      <LoginCard>
        <TitleContainer><Logo src={PlaidLogo} /><Title>DASHBOARD</Title></TitleContainer>
        <InputContainer>
          <TextField label='Email' variant='outlined' fullWidth />
        </InputContainer>

        <InputContainer>
          <TextField label='Password' variant='outlined' fullWidth />
        </InputContainer>
        <InputContainer>
          Register
        </InputContainer>
      </LoginCard>
    </Layout>
  )
}


export default Landing