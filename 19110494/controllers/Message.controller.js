const myGroup = require('../models/MyGroup').myGroup

// + /message/<id>: chỉ nhận giao thức GET, trả về dạng html theo form: <html><body><ul><li> <Họ Tên sinh viên></li></ul></body></html>. 
function idRequest(req, res, next) {
    const id = req.params.id
    const member = myGroup.find((val, index) => {
        return val.id == id
    })
    
    if (member)
    res.status(200).send(`<html><body><ul><li>${member.name}</li></ul></body></html>`)
    else
    res.status(200).send('Not valid')
}
// Nếu không có <id> thì trả về tên tất cả sinh viên trong mygroup, nếu không có thì trả về text "Not valid"
function defaultRequest(req, res, next) {   
    const memberNames = myGroup.map((val, index) => {
        return val.name
    })
    if (memberNames.length > 0){
        res.status(200).json(memberNames)
    }
    else
        res.status(200).send('Not valid')
}

module.exports = { 
    idRequest,
    defaultRequest
}