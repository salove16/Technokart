const Invoice = require("../model/invoice.model");
const express = require("express");
const validateDate = require("../middleware/validation");
const router = express.Router();

// To CREATE an invoice with middleware
router.post("/", validateDate, async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    return res.status(201).send(invoice);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// To UPDATE an invoice
router.patch("/:number", validateDate, async (req, res) => {
  try {
    const invoice = await Invoice.findOneAndUpdate(
      { invoice_number: req.params.number },
      req.body,
      { new: true }
    );
    return res.status(201).send(invoice);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// To DELETE an invoice
router.delete("/:number", async (req, res) => {
  try {
    const invoice = await Invoice.findOneAndDelete({
      invoice_number: req.params.number,
    });
    return res.status(201).send(invoice);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// To GET all invoice
router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find({});
    return res.status(200).send(invoices);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
