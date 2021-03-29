module.exports = {
  mongoURI: process.env.MONGODB_URI_KEY,
  secretOrKey: "secret",
  plaidClientID: process.env.PLAID_CLIENT_ID,
  plaidSecretKey: process.env.PLAID_SECRET_KEY,
};
