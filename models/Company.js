const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
let Schema=mongoose.Schema;

let companySchema=new Schema({
    companyName:{
        type:String,
        trim:true},
        emailId:{
        type:String,
          }        
});
module.exports=mongoose.model('Company',companySchema);