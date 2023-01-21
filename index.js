require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const uniqid = require('uniqid');
const roomRouter = require("./router/roomRouter");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3000;

app.listen(port, () => console.log(`Your app is running with ${port}`));

app.use("/", (req, res, next) => {
    var auth = {
        authorised: true,
    }
    if (auth.authorised) {
        next();
    } else {
        res.send({ msg: "Not Authorised" });
    }
});

app.use("/hba", roomRouter);