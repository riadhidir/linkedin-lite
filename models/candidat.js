import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const condidat = new Schema({
  user:{type:String,
required:true},
  password: {type:String,
    required:true},
  nom: {type:String,
    required:true},
  prenom: {type:String,
    required:true},
  email: {type:String,
    required:true},
  phone: {type:String,
    required:true},
  adresse: {type:String,
    required:true},
  sexe: ['male','famme'],
},{timestamps:true});

const Condidat = model('Condidat', condidat);
export default Condidat;
