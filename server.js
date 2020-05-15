const express = require("express");
const dotenv  = require("dotenv/config");

const app = express();

app.use(express.static(__dirname + "/index.html"));
app.use(express.static(__dirname));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
