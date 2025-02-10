const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json());

app.get("/", (req, res) => {
  res.send("User Name");
});

app.listen(PORT, () => {
  console.log (`Server running at http://localhost:${PORT} or on Render`);
});




































