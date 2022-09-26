//     + /  : xuất ra tất cả thông tin trong mygroup dạng json
const myGroup = require('../models/MyGroup').myGroup

function getGroup(req, res, next){
    res.status(200).json(myGroup);
}

module.exports =  { getGroup }