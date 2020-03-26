// const express = require('express');
const mongoose=require('mongoose');
// const router=express.Router();
const Company=mongoose.model('Company');
const User=mongoose.model('User');

exports.homePage=(req,res)=>{
    res.send("hi");
}
//List of companies
exports.addCompany=(req,res,next)=>{
    const company=Company.find((err,result)=>{
        res.json(result);
    });    
}; 

//Adding company in database
exports.createCompany=async(req,res)=>{ 
    const user=await User.findOne({emailId:req.body.emailId}); 
    const emailIsPresent=await Company.findOne({emailId:req.body.emailId});
    const companyIsPresent=await Company.findOne({companyName:req.body.companyName});
    if(!companyIsPresent)
    {
        if(!emailIsPresent)
        {
            if(user)
            {
                let company=await (new Company(req.body)).save();
                res.json('New company added');
            }
            else
            {
                res.json("Invalid emailId");
            }
        }
        else
        {
            res.json("Email alredy in use");
        }
    }
    else
    {
            res.json("Company name alredy exist");
    }
    }

    //Geting the company details by company name
    exports.getCompany=async (req,res)=>{
        const company=await Company.find({companyName:req.params.companyName},(err,docs)=>{
            res.json(docs);
        });
        
    }

//Updating the company by company name
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




//Deleting the company by company name    
exports.deleteCompany=(req,res,next)=>
{
    const getcompany=Company.find((req.body));
    const companyPresent=Company.findOne({companyName:req.body.companyName});
    const user=User.findOne({emailId:req.body.emailId}); 
    

        Company.remove({companyName:req.params.companyName},(err,doc)=>{
        if(!err){
            res.json("Company deleted");
        }
        else{
            res.json(doc);
        }
    });

    User.remove(user);

} 





