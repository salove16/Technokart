const mongoose = require("mongoose");

// Created schema for database which has 3 parameters i.e; invoice number,amount and date

const invoiceSchema = mongoose.Schema({
  invoice_number: { type: Number, required: true, unique: true },
  invoice_amount: { type: Number, required: true },
  invoice_date: { type: Date, require: true },
});

const Invoice = mongoose.model("invoices", invoiceSchema);

module.exports = Invoice;
