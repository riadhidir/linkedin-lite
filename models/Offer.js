import mongoose, { SchemaType, SchemaTypes } from 'mongoose';
const { Schema, model } = mongoose;

const offer = new Schema({
  recruteur:{type:SchemaTypes.ObjectId,
    ref:'Recruteur',
required:true},
  description: {type:sting,
    required:true},
  
},{timestamps:true});

const Offer = model('Offer', offer);
export default Offer;