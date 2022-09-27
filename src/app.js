require("dotenv").config();
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(cors());

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening in port...${PORT}`);
});
