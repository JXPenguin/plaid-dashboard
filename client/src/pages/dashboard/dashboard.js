import React from 'react'
import { useSelector } from 'react-redux'
import { logoutUser } from "../../redux/actions/authActions"

import Navbar from '../../components/layout/navbar'

import {
  Layout
} from '../pages.styles'

const Dashboard = () => {
  const { user } = useSelector(state => state.auth)
  return (
    <Layout>
      <Navbar/>
    </Layout>
  )
}

export default Dashboard