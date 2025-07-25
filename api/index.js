const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();



app.use(cors());

app.use(express.json());

const dbConfig = require("./config/dbConfig");

const usersRoute = require("./routes/usersRoute");
const examsRoute = require("./routes/examsRoute");
const resportsRoute = require("./routes/reportsRoute");


app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", resportsRoute);


app.get('/', (req, res) => {
  res.send('✅ Server is running successfully on Vercel!!');
});

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });


// Export the app for Vercel serverless function
 module.exports = app;