import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const options = {
    discriminatorKey : 'role',
    timestamps:true 
    
}
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique : true
    },
    password:{
        type:String,
        required:true
    },  email:{
        type:String,
        required:true
    }
  
},options);

const User = model('User', userSchema);
export default User;