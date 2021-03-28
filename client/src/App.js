import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import { usePlaidLink } from "react-plaid-link";
import axios from "axios";

// Pages
import Landing from "./pages/landing";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Balance from "./pages/balance";
import Transactions from "./pages/transactions";
import Budgeting from "./pages/budgeting";

import Settings from "./pages/settings";

const App = () => {
  // redux is user logged in
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  // TODO: Move these useStates into redux store plaidReducer or useContext provider
  const [linkToken, setLinkToken] = useState("");
  const [plaidData, setPlaidData] = useState("");

  useEffect(() => {
    const fetchLinkToken = async () => {
      const linkTokenData = await axios.get("/api/plaid/create-link-token");
      const {
        data: { linkToken: tokenData },
      } = linkTokenData;
      setLinkToken(tokenData);
    };

    fetchLinkToken();
  }, []);

  const onSuccess = useCallback(async (token, metadata) => {
    console.log("token in onSuccess", token);
    const { data } = await axios.post("/api/plaid/token-exchange", {
      publicToken: token,
    });
    setPlaidData(data)
  }, []);

  const config = {
    token: linkToken,
    onSuccess,
    // ...
  };

  // TODO: context provider for plaid features instead of passing in as props to all children/routes needed
  // Consider moving to all linking related management to settings page
  const plaidLink = usePlaidLink(config);

  useEffect(() => {
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      // Set user and isAuthenticated
      dispatch(setCurrentUser(decoded));
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        dispatch(logoutUser());
        // Redirect to login
        window.location.href = "./landing";
      }
    }
  }, [dispatch]);

  // Need to add proper dashboard and other routes later
  if (isAuthenticated) {
    return (
      <Router>
        <Switch>
          <Route path="/balance">
            <Balance plaidLink={plaidLink} />
          </Route>
          <Route path="/transactions">
            <Transactions plaidLink={plaidLink} />
          </Route>
          <Route path="/budgeting">
            <Budgeting plaidLink={plaidLink} />
          </Route>
          <Route path="/settings">
            <Settings plaidLink={plaidLink} />
          </Route>
          {/* TODO: Determine if we want dashboard to be our home route, remove /dashboard if so */}
          <Route path={["/dashboard", "/"]}>
            <Dashboard plaidLink={plaidLink} plaidData={plaidData} />
          </Route>
        </Switch>
      </Router>
    );
  }

  if (!isAuthenticated) {
    return (
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default App;
