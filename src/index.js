const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())
const invoiceController = require("./controller/invoice.controller");

app.use("/invoice", invoiceController);

module.exports = app;
