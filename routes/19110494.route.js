const express = require('express')
const route = express.Router()
const mssvController = require('../controllers/19110494.controller')

//    nếu GET thì nhận <id> và trả về thông tin tương ứng, thông tin trả về dạng json, nếu không có trả về {error:'not valid'}
// + /<MSSV>/<id> : nếu POST thì add item mới vào mygroup, item post dạng json, item phải là MSSV của thành viên nhóm trong đề tài cuối kỳ và chưa có trong danh sách mygroup. Nếu item không thỏa mãn yêu cầu thì xuất ra "Not valid"
route.get('/:id', mssvController.getMember)
route.post('/', mssvController.addMember)

module.exports = route