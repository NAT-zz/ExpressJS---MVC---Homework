const express = require('express')
const route = express.Router()
const defaultController = require('../controllers/Default.controller')

route.get('/', defaultController.getGroup)

module.exports = route