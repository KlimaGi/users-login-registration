const express = require('express');

// express serveris
const app = express();
const cors = require('cors');
const mongoose = require("mongoose")
const mainRouter = require("./routes/router");

mongoose.connect("mongodb+srv://admin:admin@cluster0.ygdrbad.mongodb.net/?retryWrites=true&w=majority")
  .then(() => { console.log('connected ok') })
  .catch(e => {
    console.log('connection error')
  })

app.use(cors());
// is front'o galiu siusti objektus, back'as lengvai juos skaityti gales
app.use(express.json());

app.listen(4000);

app.use('/', mainRouter);

const bcrypt = require('bcrypt');

async function createHash() {
  let myPswd = 'slaptas123';
  const hash = await bcrypt.hash(myPswd, 15);
  console.log('hash', hash);
};
//createHash();

async function comparePass() {
  const myPswd = 'slaptas123';
  const hash = "$2b$15$NJ4KYzeqOnqCaSv9ngM/MelfXob5MLJowe6SuK3bYgLHgAYzxlCNq";
  const compare = await bcrypt.compare(myPswd, hash);
  console.log('compare', compare);
};
// comparePass(); // true