import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const candidatSchema = new Schema({
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
  sex:{
    type: String,
    enum: ['male', 'female'],
    required: true
  },
},{timestamps:true});

const Candidat = model('Candidat', candidatSchema);
export default Candidat;
