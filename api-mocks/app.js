const express = require("express")
const app = express()
const country = require("./countries/index");

app.use("/api/v1/ums/countries", country);

app.listen(44444, () => {
    console.log("Api Mock service is listening on port 44444")
})