'use strict'
const express = require('express')
const dokter = require('../controllers/dokterController')
const { verifyToken } = require('../middleware/verify')
const router = express.Router()

router.get(`/api/v1/dokter`, verifyToken , dokter.index)
router.post(`/api/v1/dokter/add`, verifyToken , dokter.store)
router.get(`/api/v1/dokter/:id`, verifyToken , dokter.show)
router.put(`/api/v1/dokter/:id`, verifyToken , dokter.update)
router.delete(`/api/v1/dokter/:id`, verifyToken , dokter.destroy)

module.exports = router