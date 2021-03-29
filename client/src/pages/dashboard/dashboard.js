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
  // Bar Chart
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  // Pie Chart
  PieChart,
  Pie,
  // General
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = ({ plaidLink, plaidData }) => {
  // TODO: Move each card into it's own component, and redux to fetch plaidData
  const {
    transactionsResponse: { accounts, transactions },
  } = plaidData || { transactionsResponse: { accounts: [], transactions: [] } };

  // Account Balances
  const creditData = accounts
    ?.filter(({ type }) => type === "credit")
    ?.map(({ name, mask, balances: { current, limit } }) => ({
      name: `${name} *${mask}`,
      value: limit - current,
    }));

  const checkingSavingsData = accounts
    ?.filter(({ subtype }) => ["checking", "savings"].includes(subtype))
    ?.map(({ name, mask, balances: { current } }) => ({
      name: `${name} *${mask}`,
      value: current,
    }));

  const investmentData = accounts
    ?.filter(({ type }) => type === "investment")
    ?.map(({ name, mask, balances: { current } }) => ({
      name: `${name} *${mask}`,
      value: current,
    }));

  const loanData = accounts
    ?.filter(({ type }) => type === "loan")
    ?.map(({ name, mask, balances: { current } }) => ({
      name: `${name} *${mask}`,
      value: current,
    }));

  const getTotalAmount = (data) =>
    Math.floor(data?.reduce((a, { value }) => a + value, 0));

  // Monthly Expenses
  const getCategoryMonthAmount = (transactionCategory, monthsAgo) => {
    const filteredTransactions = transactions.filter(
      ({ category, date }) =>
        category[0] === transactionCategory &&
        moment().subtract(monthsAgo, "months").format("YYYY-MM") ===
          moment(date, "YYYY-MM-DD").format("YYYY-MM")
    );

    const totalAmount = filteredTransactions.reduce(
      (a, { amount }) => a + amount,
      0
    );
    return totalAmount;
  };

  // TODO: Determine all types of categories, and map to 6 main ones we want to show in the future, for now just use first
  const transactionCategories = [
    ...new Set(transactions?.map(({ category }) => category[0])),
  ];

  // TODO: Add 3 month, 6 month and 1 year toggle
  const budgetData = _.range(2, -1, -1).map((index) => {
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
                <CategoryTitle>Available Credit</CategoryTitle>
                <PieChart width={300} height={200}>
                  <Tooltip />
                  <Legend />
                  <Pie
                    data={creditData}
                    cx={150}
                    cy={150}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ value }) => `$${Math.floor(value)}`}
                  >
                    {creditData.map((entry, i) => (
                      <Cell key={`cell-${i}`} fill={fills[i]} />
                    ))}
                  </Pie>
                  <text
                    x={150}
                    y={140}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={midnightBlue}
                    font-size="1.25rem"
                    font-weight="700"
                  >
                    ${getTotalAmount(creditData)}
                  </text>
                </PieChart>
              </CategoryColumn>

              <CategoryColumn>
                <CategoryTitle>Checking/Savings</CategoryTitle>
                <PieChart width={300} height={200}>
                  <Tooltip />
                  <Legend />
                  <Pie
                    data={checkingSavingsData}
                    cx={150}
                    cy={150}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ value }) => `$${Math.floor(value)}`}
                  >
                    {checkingSavingsData.map((entry, i) => (
                      <Cell key={`cell-${i}`} fill={fills[i]} />
                    ))}
                  </Pie>
                  <text
                    x={150}
                    y={140}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={midnightBlue}
                    font-size="1.25rem"
                    font-weight="700"
                  >
                    ${getTotalAmount(checkingSavingsData)}
                  </text>
                </PieChart>
              </CategoryColumn>

              <CategoryColumn>
                <CategoryTitle>Investments</CategoryTitle>
                <PieChart width={300} height={200}>
                  <Tooltip />
                  <Legend />
                  <Pie
                    data={investmentData}
                    cx={150}
                    cy={150}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ value }) => `$${Math.floor(value)}`}
                  >
                    {investmentData.map((entry, i) => (
                      <Cell key={`cell-${i}`} fill={fills[i]} />
                    ))}
                  </Pie>
                  <text
                    x={150}
                    y={140}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={midnightBlue}
                    font-size="1.25rem"
                    font-weight="700"
                  >
                    ${getTotalAmount(investmentData)}
                  </text>
                </PieChart>
              </CategoryColumn>

              <CategoryColumn>
                <CategoryTitle>Loans</CategoryTitle>
                <PieChart width={300} height={200}>
                  <Tooltip />
                  <Legend />
                  <Pie
                    data={loanData}
                    cx={150}
                    cy={150}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ value }) => `$${Math.floor(value)}`}
                  >
                    {loanData.map((entry, i) => (
                      <Cell key={`cell-${i}`} fill={fills[i]} />
                    ))}
                  </Pie>
                  <text
                    x={150}
                    y={140}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={midnightBlue}
                    font-size="1.25rem"
                    font-weight="700"
                  >
                    ${getTotalAmount(loanData)}
                  </text>
                </PieChart>
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
              <div>Monthly Expenses</div>
            </CardHeader>

            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={budgetData}
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
                    key={`bar-${i}`}
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
