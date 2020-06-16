var mongoose=require('mongoose');
var Schema =mongoose.Schema;
var registration =new Schema ({
    Name:{
        type:String,
        unique:false,
        required:true
    },
    MobileNumber:{
        type:Number,
        unique:true,
        required:true
    },
    Address:{
        type:String,
        unique:false,
        required:true
    },
    Password:{
        type:String,
        unique:false,
        required:true
    }
},
    {
        timestamps:true
});
module.exports=registration;
