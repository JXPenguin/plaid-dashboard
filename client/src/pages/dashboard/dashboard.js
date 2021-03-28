import React from "react";

import Layout from "../../components/layout";

import {
  GridLayout,
  CardBalances,
  CardTransactions,
  CardBudget,
  TitleContainer,
  LoadingLayout,
  LoadingContainer,
} from "./dashboard.styles";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ReceiptIcon from "@material-ui/icons/Receipt";
import EqualizerIcon from "@material-ui/icons/Equalizer";

const Dashboard = ({ plaidLink, plaidData }) => {
  // TODO: Add proper loading handler
  if (!plaidData) {
    return (
      <Layout selected="dashboard" plaidLink={plaidLink}>
        <LoadingLayout>
          <LoadingContainer>
            Please Link with Plaid in the top right
            <br />
            <br />
            If you have already, please wait for the data to load
          </LoadingContainer>
        </LoadingLayout>
      </Layout>
    );
  }

  if (plaidData) {
    return (
      <Layout selected="dashboard" plaidLink={plaidLink}>
        <GridLayout>
          <CardBalances>
            <TitleContainer>
              <AccountBalanceIcon />
              <div>Account Balances</div>
            </TitleContainer>
          </CardBalances>
          <CardTransactions>
            <TitleContainer>
              <ReceiptIcon />
              <div>Recent Transactions</div>
            </TitleContainer>
          </CardTransactions>
          <CardBudget>
            <TitleContainer>
              <EqualizerIcon />
              <div>Budgeting Summary</div>
            </TitleContainer>
          </CardBudget>
        </GridLayout>
      </Layout>
    );
  }
};

export default Dashboard;
