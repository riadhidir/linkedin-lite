import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const adminSchema = new Schema({
    user:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true
    },
  
    email:{
        type:String,
        required:true
    }
},{timestamps:true});

const Admin = model('Admin', adminSchema);
export default Admin;