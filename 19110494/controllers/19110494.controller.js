const myModels = require('../models/MyGroup')

// nếu GET thì nhận <id> và trả về thông tin tương ứng, thông tin trả về dạng json, nếu không có trả về {error:'not valid'}
function getMember(req, res, next){
    const id = req.params.id
    const member = myModels.myGroup.find((val, index) => {
        return val.id == id
    })
    
    if (member)
        res.status(200).json(member)
    else
        res.status(200).json({error: 'not valid'})
}
// + /<MSSV>/<id> : nếu POST thì add item mới vào mygroup, item post dạng json, 
// item phải là MSSV của thành viên nhóm trong đề tài cuối kỳ và chưa có trong danh sách mygroup. 
// Nếu item không thỏa mãn yêu cầu thì xuất ra "Not valid"
function addMember(req, res, next){
    const id = req.body.id
    const exist = myModels.fullMember.find((val, index) => {
        return val.id == id
    })
    if (exist)
    {
        myModels.myGroup.push(exist)
        for(let i = 0; i < myModels.myGroup.length; i++){ 
            if (myModels.fullMember[i].id == id) { 
                myModels.fullMember.splice(i, 1); 
                break
            }
        }
        res.end()
    }
    else
        res.status(200).send('Not valid')    
}

module.exports = {
    getMember,
    addMember
}