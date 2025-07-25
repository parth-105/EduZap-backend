const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const dbConfig = require("./config/dbConfig");

const usersRoute = require("./routes/usersRoute");
const examsRoute = require("./routes/examsRoute");
const resportsRoute = require("./routes/reportsRoute");


app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", resportsRoute);
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('✅ Server is running successfully on Vercel!');
});


// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

module.exports = app;