import mongoose, { SchemaType, SchemaTypes } from 'mongoose';
const { Schema, model } = mongoose;

const job = new Schema({
  recruteur:{type:SchemaTypes.ObjectId,
    ref:'Recruteur',
required:true},
  description: {type:String,
    required:true},
  
},{timestamps:true});

const Job = model('Job', job);
export default Job;