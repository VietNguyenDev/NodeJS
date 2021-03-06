const express = require('express');
const configViewEngine = require ("./configs/viewEngine");
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;
console.log('>>> check port: ', port)

configViewEngine(app);

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})