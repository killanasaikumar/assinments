const express= require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const Joi = require('joi')
require('../db/db')

const{validates,TodosDb} = require('../model/course')


router.use(express.json())



router.get('/',async(req,res)=>{
    const Totalcourses = await TodosDb.find().sort('name')
    res.send(Totalcourses)
})

router.post('/',async(req,res)=>{
    let{error} = validates(req.body)
    console.log(error)
    if(error) return  res.status(400).send(error.details[0].message)
    
    let single_corse  = new TodosDb({
        name:req.body.name
    })
    try{
        single_corse=await single_corse.save()
        res.send(single_corse)
    }
    catch(ex){ 
        res.send(ex.messge)
    }  
}) 


router.put('/:id',async (req,res)=>{
    let{error} = validates(req.body)
    if(error) return  res.status(400).send(error.details[0].message)
    const single_corse = await TodosDb.findByIdAndUpdate(req.params.id,{ name: req.body.name }, {new: true})
    res.send(single_corse)
})

router.delete('/:id',async(req,res)=>{
    const  single_corse = await TodosDb.findByIdAndDelete(req.params.id) 
    if(!single_corse) return res.status(404).send("id is not there")
    console.log(single_corse)
    res.send(single_corse)
})


router.get('/:id',async(req,res)=>{
    const  single_corse = await TodosDb.findById(req.params.id) 
    if(!single_corse) return res.status(404).send("id is not there")
    console.log(single_corse)
    res.send(single_corse)
})


module.exports=router 