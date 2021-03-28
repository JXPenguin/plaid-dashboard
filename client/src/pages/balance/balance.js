import React from "react";
import { useSelector } from "react-redux";

import Layout from "../../components/layout";

const Balance = ({ plaidLink }) => {
  // const { user } = useSelector((state) => state.auth);

  return <Layout selected="balance" plaidLink={plaidLink}>
    <div>TBD :)</div>
  </Layout>;
};

export default Balance;
