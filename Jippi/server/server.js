const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4004;
// Routes 
// CompanyRoutes
const signupCompanyRouter = require("./routes/auth/company/signupCompanyRouter.js");
const loginCompanyRouter = require("./routes/auth/company/loginCompanyRouter.js");
const companyProfileRouter = require("./routes/companyProfileRouter.js");
//CustomerRoutes
const loginCustomerRouter = require("./routes/auth/customer/loginCustomerRouter.js");
const signupCustomerRouter = require("./routes/auth/customer/signupCustomerRouter.js");
const customerProfileRouter = require("./routes/customerProfileRouter.js");
// items & products
const itemsRouter = require("./routes/items.js");

// Using those routes
  // Company
  app.use("/api/register/company", signupCompanyRouter);
  app.use("/api/login/company", loginCompanyRouter);
  app.use("/api/profile/company", companyProfileRouter)
  //Customer
  app.use("/api/register/customer", signupCustomerRouter);
  app.use("/api/login/customer", loginCustomerRouter);
  app.use("/api/profile/customer", customerProfileRouter);
  // items
  app.use("/api/items", itemsRouter)


app.listen(PORT, () => {
    console.log(`Main Server is lestening on port ${PORT}...`);
});