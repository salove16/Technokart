const connect = require("./config/db");
const app = require("./index");
const PORT = 5005;

// server connected to Database

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Listening on port ${PORT} !`);
  } catch (error) {
    console.log(error);
  }
});
