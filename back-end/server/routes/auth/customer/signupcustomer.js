const signupCustomerRouter = require("express").Router();
const Customer = require("../../../database/customerShema.js");

signupCustomerRouter.post("/signup", async(req, res) => {
  try {
    const result = await Customer.create({});
    res.send(result);
  } catch (err) {
    res.send(`signupCustomerRouter err ${err}`);
  }
});
module.exports = signupCustomerRouter;
