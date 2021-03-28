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
  BalanceContainer,
  CategoryColumn,
  CategoryTitle,
} from "./dashboard.styles";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ReceiptIcon from "@material-ui/icons/Receipt";
import EqualizerIcon from "@material-ui/icons/Equalizer";

const Dashboard = ({ plaidLink, plaidData }) => {
  // TODO: Move each card into it's own component, and redux to fetch plaidData
  const {
    transactionsResponse: { accounts, transactions },
  } = plaidData || { transactionsResponse: { accounts: [], transactions: [] } };

  // const creditAccounts = accounts?.filter(({ type }) => type === "credit");
  // const depositAccounts = accounts?.filter(({ type }) => type === "depository");
  // const investmentAccounts = accounts?.filter(({ type }) => "investment");
  // const loanAccounts = accounts?.filter(({ type }) => type === "loan");

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
            <br/>
            <br/>

            This is Sandbox, so please use the following login credentials:<br/><br/>
            user: user_good<br/>
            password: pass_good
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
            <BalanceContainer>
              <CategoryColumn>
                <CategoryTitle>Credits</CategoryTitle>
              </CategoryColumn>
              <CategoryColumn>
                <CategoryTitle>Deposits</CategoryTitle>
              </CategoryColumn>
              <CategoryColumn>
                <CategoryTitle>Investments</CategoryTitle>
              </CategoryColumn>
              <CategoryColumn>
                <CategoryTitle>Loans</CategoryTitle>
              </CategoryColumn>
            </BalanceContainer>
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
              {transactions
                .slice(0, 50)
                .map(({ amount, iso_currency_code, date, name }) => (
                  <TransactionRow>
                    <div>{date}</div>
                    <div>{name}</div>
                    <div>
                      ${amount} {iso_currency_code}
                    </div>
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
