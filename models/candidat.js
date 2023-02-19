import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const condidatSchema = new Schema({
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

const Condidat = model('Condidat', condidatSchema);
export default Condidat;
