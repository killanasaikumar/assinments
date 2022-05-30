const Joi = require('joi')
const string = require('joi/lib/types/string')
const mongoose  = require('mongoose')


function validates(input){
    const schema = {
        name:Joi.string().min(3)
    }
    return Joi.validate(input,schema)
    
}

const Dbschems = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    }
})
 const TodosDb = mongoose.model('TodosDb',Dbschems)
 console.log(TodosDb)

exports.validates = validates
exports.TodosDb = TodosDb