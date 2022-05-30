const express=require('express')
const app = express()
const course = require('./routes/courses')

app.use('/api/todos',course)
console.log('hiii')
app.listen(8000,()=>{console.log("lising port")})           