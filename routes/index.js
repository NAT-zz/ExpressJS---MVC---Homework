// - Sử dụng route của express để chọn controller phù hợp
const defaultRoute = require('./Default.route')
const mssvRoute = require('./19110494.route')
const messageRoute = require('./Message.route')

function route(app) {
    // - Web server có 3 endpoint / và /<MSSV>/<id>, /message/<id>

    app.use("/", defaultRoute)
    app.use("/19110494", mssvRoute)
    app.use("/message", messageRoute)
}
module.exports = route


