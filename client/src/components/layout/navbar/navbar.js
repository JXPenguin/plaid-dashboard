import React from "react";
import { useDispatch } from "react-redux";

import PlaidLogo from "../../../assets/plaid_logo.png";
import { logoutUser } from "../../../redux/actions/authActions";

import {
  Layout,
  TitleContainer,
  Title,
  Logo,
  MenuContainer,
  PlaidLink,
} from "./navbar.styles";

const Navbar = ({ plaidLink }) => {
  const dispatch = useDispatch();
  const { open, ready, error } = plaidLink

  return (
    <Layout>
      <TitleContainer>
        <Logo src={PlaidLogo} />
        <Title>DASHBOARD</Title>
      </TitleContainer>
      <MenuContainer>
        <PlaidLink onClick={() => open()} disabled={!ready}>
          Link with Plaid!
        </PlaidLink>
        <div onClick={() => dispatch(logoutUser())}>Sign out</div>
      </MenuContainer>
    </Layout>
  );
};

export default Navbar;
