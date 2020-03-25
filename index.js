const express = require('express');
const mongoose=require('mongoose');
const router = express.Router();
const companyController=require('./companyController');
const Company=mongoose.model('Company');
const {catchErrors}=require('./errorHandlers');


router.get('/', companyController.homePage);
router.get('/company', companyController.addCompany);
router.post('/add', catchErrors(companyController.createCompany));
router.put('/company/:companyName',companyController.updateCompany);
router.delete('/company/:companyName',companyController.deleteCompany);


module.exports = router;






