import React from 'react'
import { useSelector } from 'react-redux'
import { logoutUser } from "../../redux/actions/authActions"

const Dashboard = () => {
  const { user } = useSelector(state => state.auth)

  console.log('user', user)
  return (<div>dashboard</div>)
}

export default Dashboard