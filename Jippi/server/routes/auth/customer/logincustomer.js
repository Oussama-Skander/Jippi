const loginCustomerRouter = require("express").Router();
const Customer = require("../../../../database/customerShema.js")
const jwt = require("jsonwebtoken");

loginCustomerRouter.post("/login", (req, res) => {
    try {
        const result = await Customer.findOne({ where: { email: req.body.email.email } });
      
  } catch (err) {
    res.send(err);
  }
});
