//     + /message/<id>: chỉ nhận giao thức GET, trả về dạng html theo form: <html><body><ul><li> <Họ Tên sinh viên></li></ul></body></html>. 
// Nếu không có <id> thì trả về tên tất cả sinh viên trong mygruop, nếu không có thì trả về text "Not valid"
const express = require('express')
const route = express.Router()
const messageController = require('../controllers/Message.controller')

route.get('/:id', messageController.idRequest)
route.get('/', messageController.defaultRequest)

module.exports = route