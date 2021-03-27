import React from "react";
import { useSelector } from "react-redux";

import Layout from "../../components/layout";

const Settings = ({ plaidLink }) => {
  // const { user } = useSelector((state) => state.auth);

  return <Layout selected="settings" plaidLink={plaidLink}>
    <div>Settings to be added soon, we'll be adding linking and account management here in the future :)</div>
  </Layout>;
};

export default Settings;
