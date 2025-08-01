const mongoose = require("mongoose");
const schema=mongoose.Schema;
const passportLocalMongoose=require('passport-local-mongoose');

const UserSchema=new schema({ //UserSchema
    email:{
        type:String,
        required:true,
    }
})

UserSchema.plugin(passportLocalMongoose)
module.exports=mongoose.model("User",UserSchema);