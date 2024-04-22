'use strict'
const express = require('express')
const router = express()
const dokter = require('./dokterRoutes')
const auth = require('./authRoutes')

router.get(`/api/v1/`, (_req, res) => {
  res.json({
    "message": "Welcome to restfullapi"
  })
})

router.use(dokter)
router.use(auth)

module.exports = router