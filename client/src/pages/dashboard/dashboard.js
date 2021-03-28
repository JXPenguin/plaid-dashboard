import React, { useDebugValue } from "react";
import moment from "moment";
import _ from "lodash";

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

import { midnightBlue } from "../../sharedStyles/colors";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ReceiptIcon from "@material-ui/icons/Receipt";
import EqualizerIcon from "@material-ui/icons/Equalizer";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = ({ plaidLink, plaidData }) => {
  // TODO: Move each card into it's own component, and redux to fetch plaidData
  const {
    transactionsResponse: { accounts, transactions },
  } = plaidData || { transactionsResponse: { accounts: [], transactions: [] } };

  // const creditAccounts = accounts?.filter(({ type }) => type === "credit");
  // const depositAccounts = accounts?.filter(({ type }) => type === "depository");
  // const investmentAccounts = accounts?.filter(({ type }) => "investment");
  // const loanAccounts = accounts?.filter(({ type }) => type === "loan");

  const getCategoryMonthAmount = (transactionCategory, monthsAgo) => {
    const filteredTransactions = transactions.filter(
      ({ category, date }) =>
        category[0] === transactionCategory &&
        moment().subtract(monthsAgo, "months").format("YYYY-MM") ===
          moment(date, "YYYY-MM-DD").format("YYYY-MM")
    );

    const totalAmount = filteredTransactions.reduce((a, { amount}) => a + amount, 0);
    return totalAmount;
  };

  // TODO: Determine all types of categories, and map to 6 main ones we want to show in the future, for now just use first
  const transactionCategories = [
    ...new Set(transactions?.map(({ category }) => category[0])),
  ];

  // TODO: Add 3 month, 6 month and 1 year toggle
  const data = _.range(2, -1, -1).map((index) => {
    const monthData = transactionCategories.map((transactionCategory) => {
      return [
        transactionCategory,
        getCategoryMonthAmount(transactionCategory, index),
      ];
    });

    const arrayData = [
      ["month", moment().subtract(index, "months").format("MMM YYYY")],
      ...monthData,
    ];
    return Object.fromEntries(arrayData);
  });

  const fills = [
    "#8884d8",
    "#8dd1e1",
    "#a4de6c",
    "#ffc658",
    "#eb975b",
    "#d66363",
  ];

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
            <br />
            <br />
            This is Sandbox, so please use the following login credentials:
            <br />
            <br />
            user: user_good
            <br />
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
              <AccountBalanceIcon style={{ color: midnightBlue }} />
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
              <ReceiptIcon style={{ color: midnightBlue }} />
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
              <EqualizerIcon style={{ color: midnightBlue }} />
              <div>Budgeting Summary</div>
            </CardHeader>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                {transactionCategories.map((transactionCategory, i) => (
                  <Bar
                    dataKey={transactionCategory}
                    stackId="a"
                    fill={fills[i]}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </CardBudget>
        </GridLayout>
      </Layout>
    );
  }
};

export default Dashboard;
