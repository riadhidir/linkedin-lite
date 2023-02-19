import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const recruteurSchema = new Schema({
user:{type:String,required:true},

password:{type:String,required:true},

nom:{
    type:String,required:true},
email:{
    type:String,required:true},
phone:{
    type:String,
    minKey:5,required:true},
adresse:{
    type:String,required:true}

},{timestamps:true});

const Recruteur = new model('Recruteur', recruteurSchema);
export default Recruteur;