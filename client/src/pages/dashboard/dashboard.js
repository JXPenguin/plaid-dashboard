import React from "react";
import { useSelector } from "react-redux";

import Layout from '../../components/layout'

import { GridLayout, GridCardBalances, GridCardTransactions, GridCardBudget } from './dashboard.styles'

const Dashboard = ({ plaidLink }) => {
  // const { user } = useSelector((state) => state.auth);

  return (
    <Layout selected="dashboard" plaidLink={plaidLink}>
      <GridLayout>
        <GridCardBalances>Test</GridCardBalances>
        <GridCardTransactions>Test</GridCardTransactions>
        <GridCardBudget>Test</GridCardBudget>
      </GridLayout>
    </Layout>
  );
};

export default Dashboard;
