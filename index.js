const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const dateTime = new Date().toISOString();
  console.log(`Endpoint hit at ${dateTime}`);

  res.setHeader("Cache-control", "public, max-age=300");

  res.send(`Served at ${dateTime}`);
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
