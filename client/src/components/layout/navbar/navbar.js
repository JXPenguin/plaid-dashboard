import React from 'react'
import { useHistory } from 'react-router-dom'

import PlaidLogo from '../../../assets/plaid_logo.png'

import {
  Layout,
  TitleContainer,
  Title,
  Logo,
} from './navbar.styles'

const Navbar = () => {
  const history = useHistory()

  return (
    <Layout><TitleContainer><Logo src={PlaidLogo}/><Title>DASHBOARD</Title></TitleContainer></Layout>
  )
}


export default Navbar