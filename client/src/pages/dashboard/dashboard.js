import React from "react";
import { useSelector } from "react-redux";

import Layout from '../../components/layout'

const Dashboard = ({ plaidLink }) => {
  // const { user } = useSelector((state) => state.auth);

  return (
    <Layout selected="dashboard" plaidLink={plaidLink}>
    </Layout>
  );
};

export default Dashboard;
