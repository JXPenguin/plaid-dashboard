import React from "react";
import { useHistory } from 'react-router-dom'

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
import SettingsIcon from "@material-ui/icons/Settings";

const Layout = ({ children, selected, plaidLink }) => {
  const history = useHistory()

  return (
    <LayoutWrapper>
      <Navbar plaidLink={plaidLink} />
      <BodyContainer>
        <SideBarMenu>
          <SideBarBody>
            <OptionContainer selected={selected === "dashboard"} onClick={() => history.push("/dashboard")}>
              <DashboardIcon />
              <div>Dashboard</div>
            </OptionContainer>
          </SideBarBody>
          <SideBarFooter>
            <OptionContainer selected={selected === "settings"} onClick={() => history.push("/settings") }>
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
