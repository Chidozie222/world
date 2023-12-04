const express = require('express')
const cors = require('cors')
const sheet = require('./routes/sheet')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(sheet)




app.listen(
    process.env.PORT,
)