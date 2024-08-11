const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  const message = "hello world";
  res.send(message);
});

app.listen(PORT, () => console.log(`app is up and running on port: ${PORT}`));
