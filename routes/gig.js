const express = require('express')
const router = express.Router()
const Gig = require('../models/gig.js')

router.get('/', (req, res) => {
    Gig.findAll()
    .then(row => {
        res.json(row)
    })
    .catch(err => console.log('error: ' + err))
})

module.exports = router