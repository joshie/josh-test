const express = require('express')
const request = require('request')
const app = express()
const port = 8080

app.get('/', (req, res) => request(process.env.API_URL, function(e,r,b) {
  res.send('Hello USA! API Data:' + b)
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
