const express = require("express");
const plaid = require("plaid");
const router = express.Router();
const passport = require("passport");
const moment = require("moment");
const mongoose = require("mongoose");
const path = require("path");
const util = require("util");

// Load Account and User models
const Account = require("../../models/Account");
const User = require("../../models/User");

const plaidClient = new plaid.Client({
  clientID: "605ba601594708000fa283d4",
  secret: "7f208e3724c8cf2702563a797403be",
  env: plaid.environments.sandbox,
});

// ROUTES
router.get("/create-link-token", async (req, res) => {
  const { link_token: linkToken } = await plaidClient.createLinkToken({
    user: {
      client_user_id: "unique id",
    },
    client_name: "Jeff",
    products: ["auth", "identity"],
    country_codes: ["US"],
    language: "en",
  });

  res.json({ linkToken });
});

router.post("/token-exchange", async (req, res) => {
  const { publicToken } = req.body;
  const { access_token: accessToken } = await plaidClient.exchangePublicToken(
    publicToken
  );

  const authResponse = await plaidClient.getAuth(accessToken);

  console.log("--------------");
  console.log(
    "Auth Response:  ",
    console.log(util.inspect(authResponse, false, null, true))
  );

  const identityResponse = await plaidClient.getIdentity(accessToken);
  console.log("--------------");
  console.log(
    "Identity Response:  ",
    console.log(util.inspect(identityResponse, false, null, true))
  );

  const balanceResponse = await plaidClient.get(accessToken);
  console.log("--------------");
  console.log(
    "Balance Response:  ",
    console.log(util.inspect(balanceResponse, false, null, true))
  );

  res.sendStatus(200);
});

// Routes will go here
module.exports = router;
