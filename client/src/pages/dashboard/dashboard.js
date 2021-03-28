import React from "react";

import Layout from "../../components/layout";

import {
  LoadingLayout,
  LoadingContainer,
  GridLayout,
  CardBalances,
  CardTransactions,
  CardBudget,
  CardHeader,
  CardBody,
  TransactionRow,
  TransactionTitle,
} from "./dashboard.styles";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ReceiptIcon from "@material-ui/icons/Receipt";
import EqualizerIcon from "@material-ui/icons/Equalizer";

const Dashboard = ({ plaidLink, plaidData }) => {
  const {
    transactionsResponse: { accounts, transactions },
  } = plaidData;
  

  console.log("plaidData", plaidData);

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
            <CardHeader>
              <AccountBalanceIcon />
              <div>Account Balances</div>
            </CardHeader>
          </CardBalances>
          <CardTransactions>
            <CardHeader>
              <ReceiptIcon />
              <div>Recent Transactions</div>
            </CardHeader>
            <CardBody>
              <TransactionTitle>
                <div>DATE</div>
                <div>NAME</div>
                <div>AMOUNT</div>
              </TransactionTitle>
              {transactions.slice(0,50).map(({ amount, date, name}) => (
                <TransactionRow>
                  <div>{date}</div>
                  <div>{name}</div>
                  <div>{amount}</div>
                </TransactionRow>
              ))}
            </CardBody>
          </CardTransactions>
          <CardBudget>
            <CardHeader>
              <EqualizerIcon />
              <div>Budgeting Summary</div>
            </CardHeader>
          </CardBudget>
        </GridLayout>
      </Layout>
    );
  }
};

export default Dashboard;
