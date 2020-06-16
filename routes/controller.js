const express = require('express')
const Registrations = require('../module/client')
const nodemailer = require("nodemailer");

const router = express.Router()
var cors = require('cors')

router.use(cors())

router.post('/create',async (req, res) => {

     var login={
        Name:req.body.Name,
        MobileNumber:req.body.MobileNumber,
        Address:req.body.Address,
        Password:req.body.Password

    };
    Registrations.create(login,function(err,login){
        if(err){
            res.json({
                error:err
            })
        }
        res.json({
            message:"User Profile is Created"
        })
    })

});

router.get('/get', async (req, res)=>{
    
        Registrations.get({},function(err,logins){
            if(err){
                res.json({
                    error:err
                })
            }
            res.json({
                message:logins
            })
        })

});


router.get('/sample', async(req, res) => {
    // View logged in user profile
    res.send({"msg":"hello world"})
})
module.exports = router
