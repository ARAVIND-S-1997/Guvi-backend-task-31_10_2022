import mongoose from "mongoose";

const schema= mongoose.Schema;

const userScheme=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export const userModel=mongoose.model('users',userScheme);