const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
.then(()=>console.log('connected db'))
.catch((error)=>console.log('not connectes db'))