import mongoose, { SchemaType, SchemaTypes } from 'mongoose';
const { Schema, model } = mongoose;

const jobSchema = new Schema({
  recruteur:{type:SchemaTypes.ObjectId,
    ref:'Recruteur',
required:true},
  description: {type:String,
    required:true},
  
},{timestamps:true});

const Job = model('Job', jobSchema);
export default Job;