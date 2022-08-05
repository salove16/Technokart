const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://mitul:patel778@cluster0.ecdww.mongodb.net/technokart?retryWrites=true&w=majority"
  );
};

module.exports = connect;
