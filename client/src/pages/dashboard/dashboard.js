import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/layout/navbar";

import { Layout } from "../pages.styles";

const Dashboard = ({ plaidLink }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <Navbar plaidLink={plaidLink} />
    </Layout>
  );
};

export default Dashboard;
