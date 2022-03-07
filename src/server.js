const express = require('express')
const routes = require('./routes')

require('./database')

const app = express()

// request com formato json
app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`)
})