const express = require("express");
const cors = require("cors");
require("dotenv").config();

const dashboardRoutes = require("./routes/dashboardroutes");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/dashboard", dashboardRoutes);

const port = process.env.PORT || 5005;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});