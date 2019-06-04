const express = require('express')

const app = express()
const port = 3300

app.get('/', (req, res) => { res.json({ message: 'Hello world' }) })

module.exports = {
  server: app,
  port
}
