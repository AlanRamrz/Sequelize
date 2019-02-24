const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send('Hello world')
})

app.use('/gigs', require('./routes/gig.js'))

app.listen(8080, () => {
    console.log("Server started on port 8080")
})