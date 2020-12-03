const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})
app.listen(8000, () => {
  console.log('Example app listening at http://127.0.0.1:8000')
})