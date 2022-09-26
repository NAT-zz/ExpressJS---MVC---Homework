const express = require('express');
const app = express();
// - Web server thực thi ở port 5000
const PORT = 5000;
const route = require('./routes/index')

app.use(express.json());

// - Viết hàm log để hiện thị ra console chi tiết giao thức POST hay GET, url là gì
app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});

// routes init
route(app)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});