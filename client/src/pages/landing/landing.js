import React from 'react'
import { useHistory } from 'react-router-dom'

import {
  Layout,
  LoginCard,
} from './landing.styles'

const Landing = () => {
  const history = useHistory()

  return (
    <Layout>
      <LoginCard>
        Login Here
      </LoginCard>
      </Layout>
  )
}


export default Landing