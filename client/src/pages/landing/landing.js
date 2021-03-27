import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../redux/actions/authActions";

// Assets
import PlaidLogo from "../../assets/plaid_logo.png";

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
} from "./landing.styles";

const Landing = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector((state) => state.errors);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(userData, history));
  };

  return (
    <Layout>
      <LoginCard onSubmit={onSubmit}>
        <TitleContainer>
          <Logo src={PlaidLogo} />
          <Title>DASHBOARD</Title>
        </TitleContainer>
        <InputContainer>
          <Input
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            onChange={onChange}
            error={errors.email}
            helperText={errors.email}
          />
        </InputContainer>

        <InputContainer>
          <Input
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            onChange={onChange}
            error={errors.password}
            helperText={errors.password}
          />
        </InputContainer>
        <ButtonContainer>
          <LoginButton type="submit" variant="contained" color="primary">
            Sign In
          </LoginButton>
          <RegisterLink href="/register">REGISTER</RegisterLink>
        </ButtonContainer>
      </LoginCard>
    </Layout>
  );
};

export default Landing;
