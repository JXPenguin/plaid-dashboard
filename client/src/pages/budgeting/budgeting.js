import React from "react";
import { useSelector } from "react-redux";

import Layout from "../../components/layout";

const Budgeting = ({ plaidLink }) => {
  // const { user } = useSelector((state) => state.auth);

  return <Layout selected="budgeting" plaidLink={plaidLink}>
    <div>TBD :)</div>
  </Layout>;
};

export default Budgeting;
