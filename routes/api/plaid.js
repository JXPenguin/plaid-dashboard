const express = require("express");
const plaid = require("plaid");
const router = express.Router();
const passport = require("passport");
const keys = require("../../config/keys")
const moment = require("moment");
const mongoose = require("mongoose");
const path = require("path");
const util = require("util");

// Load Account and User models
const Account = require("../../models/Account");
const User = require("../../models/User");

const plaidClient = new plaid.Client({
  clientID: keys.plaidClientID,
  secret: keys.plaidSecretKey,
  env: plaid.environments.sandbox,
});

// ROUTES
router.get("/create-link-token", async (req, res) => {
  try {
    const { link_token: linkToken } = await plaidClient.createLinkToken({
      user: {
        client_user_id: "unique id",
      },
      client_name: "SandboxUser",
      products: ["auth", "identity", "transactions"],
      country_codes: ["US"],
      language: "en",
    });

    res.json({ linkToken });
  } catch (error) {
    console.error(error);
  }
});

router.post("/token-exchange", async (req, res) => {
  try {
    const { publicToken } = req.body;
    const { access_token: accessToken } = await plaidClient.exchangePublicToken(
      publicToken
    );

    // const authResponse = await plaidClient.getAuth(accessToken);

    // // console.log("--------------");
    // // console.log(
    // //   "Auth Response:  ",
    // //   console.log(util.inspect(authResponse, false, null, true))
    // // );

    // const identityResponse = await plaidClient.getIdentity(accessToken);
    // // console.log("--------------");
    // // console.log(
    // //   "Identity Response:  ",
    // //   console.log(util.inspect(identityResponse, false, null, true))
    // // );

    const balanceResponse = await plaidClient.getBalance(accessToken);
    const transactionsResponse = await plaidClient.getTransactions(
      accessToken,
      moment().subtract('3', 'months').format('YYYY-MM-DD'),
      moment().format('YYYY-MM-DD'),
      { count: 300, offset: 0 }
    );

    res.json({ balanceResponse, transactionsResponse });
  } catch (error) {
    console.error(error);
  }
});

// Routes will go here
module.exports = router;
