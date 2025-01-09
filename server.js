const express = require('express')
const path = require("path");
const app = express()
const port = 3000

app.use('/manager',express.static('build/manager'))

app.get('/manager', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/manager/index.html'))
})
app.use('/ram',express.static('build/ram'))

app.get('/ram', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/ram/index.html'))
})
app.listen(port, () => {
  console.log(`http://localhost:${port}/ram`)
  console.log(`http://localhost:${port}/manager`)
})