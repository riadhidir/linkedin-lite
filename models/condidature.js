import mongoose, { SchemaType, SchemaTypes } from 'mongoose';
const { Schema, model } = mongoose;

const condidature = new Schema({
  condida:{type:SchemaTypes.ObjectId,
    ref:'condidat',
required:true},
  cv: {type:binData,
    required:true},
  offre: {type:SchemaTypes.ObjectId,
    ref:'offer',
    required:true},
    sex:{
        type: String,
        enum: ['pending', 'accepted','rejected'],
        default: 'pending'}
},{timestamps:true});

const Condidature = model('Condidature', condidature);
export default Condidature;
