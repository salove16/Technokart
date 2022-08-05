const express = require("express");
const app = express();
app.use(express.json());
const invoiceController = require("./controller/invoice.controller");

app.use("/invoice", invoiceController);

module.exports = app;
