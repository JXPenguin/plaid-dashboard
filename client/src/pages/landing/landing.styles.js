import styled from 'styled-components'
import BackgroundImage from '../../assets/background_image.jpg'

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  /* Handles background image */
  background: url(${BackgroundImage}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

export const LoginCard = styled.div`
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
  margin: 1rem 1rem;
  display: flex;
  justify-content: center;
  width: 18rem;
`