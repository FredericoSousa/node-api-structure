const express = require("express");
const app = express();
app.use(express.json());

require("./app/routes")(app);

app.listen(3000, console.log("Listen on port 3000"));
