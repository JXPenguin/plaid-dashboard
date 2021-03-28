import React from "react";
import { useSelector } from "react-redux";

import Layout from "../../components/layout";

const Transactions = ({ plaidLink }) => {
  // const { user } = useSelector((state) => state.auth);

  return <Layout selected="transactions" plaidLink={plaidLink}>
    <div>TBD :)</div>
  </Layout>;
};

export default Transactions;
