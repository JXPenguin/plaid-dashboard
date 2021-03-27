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

const App = () => {
  // redux is user logged in
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [linkToken, setLinkToken] = useState("");

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

  const onSuccess = useCallback((token, metadata) => {
    console.log(
      "attempting to exchange public token for access token and fetch info"
    );
    axios.post("/api/plaid/token-exchange", { token });
    console.log("successfully completed fetch");
  }, []);

  const config = {
    token: linkToken,
    onSuccess,
    // ...
  };

  console.log("config", config);

  // TODO: context provider for plaid features
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
          <Route path="/">
            <Dashboard plaidLink={plaidLink} />
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
