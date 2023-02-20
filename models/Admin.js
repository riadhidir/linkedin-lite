import mongoose from 'mongoose';
import User from './User.js';

const { Schema, SchemaTypes,model } = mongoose;
const adminSchema = new Schema({
    

  
});

const Admin = User.discriminator('Admin', adminSchema);
export default Admin;