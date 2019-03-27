const express = require('express')
const request = require('request')
const app = express()
const port = 8080

app.get('/', (req, res) => request('http://'+process.env.API_URL+':8081', function(e,r,b) {
  res.send('Hello World! API Data:' + b)
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
