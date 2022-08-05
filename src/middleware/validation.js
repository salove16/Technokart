const Invoice = require("../model/invoice.model");
const moment = require("moment");

// Middleware to validate the date

const validateDate = async (req, res, next) => {
  const previous_invoice = await Invoice.findOne({
    invoice_number: { $lt: req.body.invoice_number },
  }).sort({ invoice_number: -1 });
  const next_invoice = await Invoice.findOne({
    invoice_number: { $gt: req.body.invoice_number },
  });

  // condition to check if date is present in between the previous and next

  if (previous_invoice && next_invoice) {
    const validate = moment(req.body.invoice_date).isBetween(
      previous_invoice.invoice_date,
      next_invoice.invoice_date,
      "days"
    );
    if (validate) {
      return next();
    } else {
      return res.status(500).send({
        message: `The date must lie in between ${previous_invoice.invoice_date.toString()} and ${next_invoice.invoice_date.toString()}`,
      });
    }
  }
  return next();
};

module.exports = validateDate;
