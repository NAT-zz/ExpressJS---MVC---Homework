//     + /<MSSV>/<id> : nếu POST thì add item mới vào mygroup, item post dạng json, item phải là MSSV của thành viên nhóm trong đề tài cuối kỳ và chưa có trong danh sách mygroup. Nếu item không thỏa mãn yêu cầu thì xuất ra "Not valid"
const myGroup = require('../models/MyGroup').myGroup

// nếu GET thì nhận <id> và trả về thông tin tương ứng, thông tin trả về dạng json, nếu không có trả về {error:'not valid'}
function getMember(req, res, next){
    const id = req.params.id
    const member = myGroup.find((val, index) => {
        return val.id == id
    })
    
    if (member)
        res.status(200).json(member)
    else
        res.status(200).json({error: 'not valid'})
}
function addMember(req, res, next){
    console.log(`${req.body}`)

    if (!req.body.name) {
        return res.status(400).json({
            error:'must have username'
        });
    }
    const friend = {name: req.body.name,id:friends.length};
    friends.push(friend);
    res.status(200).json(friend);
}

module.exports = {
    getMember,
    addMember
}