import styled from 'styled-components'
import BackgroundImage from '../../assets/background_image.jpg'
import { Button, TextField } from '@material-ui/core'


export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-height: -webkit-fill-available;

  /* Handles background image */
  background: url(${BackgroundImage}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

export const LoginCard = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  flex: 0.5 0;
  min-width: 20rem;
  box-shadow: 0px 0px 15px 1px  #e6e6e6;
  background-color: white;
  border-radius: 20px;
  height: 30rem;
  padding: 1rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 3rem;
  padding: 1rem 0rem;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  height: 3rem;
`

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
`

export const InputContainer = styled.div`
  margin: 0rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  width: 18rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

export const LoginButton = styled(Button)`
`

export const Input = styled(TextField)`
`

export const RegisterLink = styled.a`
  padding: 0.5rem;
  margin: 1rem;
  color: black;
  text-decoration: none;
`