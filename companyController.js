// const express = require('express');
const mongoose=require('mongoose');
// const router=express.Router();
const Company=mongoose.model('Company');
const User=mongoose.model('User');

exports.homePage=(req,res)=>{
    res.send("hi");
}
exports.addCompany=(req,res,next)=>{
    const company=Company.find((err,result)=>{
        res.json(result);
    });    
}; 
exports.createCompany=async (req,res)=>{      
    let company=new Company({
        companyName:req.body.companyName,
        emailId:req.body.emailId
    }); 
    await company.save();
    res.json('New company added');
};

// exports.getUsers=(req,res,next)=>{
//     const users=User.findOne({emailId:req.params.emailId});
    
// }


exports.updateCompany=(req,res,next)=>{
    Company.findOneAndUpdate({companyName:req.params.companyName},{
        $set:{
           companyName:req.body.companyName,
             }},
        (err,results)=>{
          if(!err){
                  res.json('Company Updated');
                  }
          else{
                  res.json(results);
              }
          }
    )};

exports.deleteCompany=(req,res,next)=>
{
    Company.remove({companyName:req.params.companyName},(err,doc)=>{
        if(!err){
            res.json("Company deleted");
        }
        else{
            res.json(doc);
        }
    });
    
}




