import React from "react";
import { useSelector } from "react-redux";

import Layout from "../../components/layout";

const Accounts = ({ plaidLink }) => {
  // const { user } = useSelector((state) => state.auth);

  return <Layout selected="accounts" plaidLink={plaidLink}>
    <div>TBD :)</div>
  </Layout>;
};

export default Accounts;
