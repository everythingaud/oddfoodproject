const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//test
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(app.get("port"), () => {
  console.log(`Server running on port: http://localhost:${app.get("port")}/`);
});
