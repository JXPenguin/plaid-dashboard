import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "./navbar";

import {
  LayoutWrapper,
  BodyContainer,
  SideBarMenu,
  SideBarBody,
  SideBarFooter,
  OptionContainer,
} from "./layout.styles";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ReceiptIcon from "@material-ui/icons/Receipt";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SettingsIcon from "@material-ui/icons/Settings";

const Layout = ({ children, selected, plaidLink }) => {
  const history = useHistory();

  return (
    <LayoutWrapper>
      <Navbar plaidLink={plaidLink} />
      <BodyContainer>
        <SideBarMenu>
          <SideBarBody>
            <OptionContainer
              selected={selected === "dashboard"}
              onClick={() => history.push("/dashboard")}
            >
              <DashboardIcon />
              <div>Dashboard</div>
            </OptionContainer>

            <OptionContainer
              selected={selected === "balance"}
              onClick={() => history.push("/balance")}
            >
              <AccountBalanceIcon />
              <div>Balance</div>
            </OptionContainer>

            <OptionContainer
              selected={selected === "transactions"}
              onClick={() => history.push("/transactions")}
            >
              <ReceiptIcon />
              <div>Transactions</div>
            </OptionContainer>

            <OptionContainer
              selected={selected === "budgeting"}
              onClick={() => history.push("/budgeting")}
            >
              <EqualizerIcon />
              <div>Budgeting</div>
            </OptionContainer>
          </SideBarBody>
          <SideBarFooter>
            <OptionContainer
              selected={selected === "settings"}
              onClick={() => history.push("/settings")}
            >
              <SettingsIcon />
              <div>Settings</div>
            </OptionContainer>
          </SideBarFooter>
        </SideBarMenu>

        {children}
      </BodyContainer>
    </LayoutWrapper>
  );
};

export default Layout;
