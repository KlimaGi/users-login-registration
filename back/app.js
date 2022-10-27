const dotenv = require("dotenv");
const express = require('express');

// express serveris
const app = express();
const cors = require('cors');
const mongoose = require("mongoose")
const mainRouter = require("./routes/router");

dotenv.config();
const uri = process.env.ATLAS_URI;
mongoose.connect(uri)
  .then(() => { console.log('connected ok') })
  .catch(error => {
    console.log('connection error', error)
  })

app.use(cors());
// is front'o galiu siusti objektus, back'as lengvai juos skaityti gales
app.use(express.json());

app.listen(4000);

app.use('/', mainRouter);
