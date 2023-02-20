import mongoose from 'mongoose';
import User from './User.js';
const { Schema,SchemaTypes, model } = mongoose;

const recruteurSchema = new Schema({
nom:{
    type:String,required:true},
phone:{
    type:String,
    minKey:5,required:true},
adresse:{
    type:String,required:true},
    

});

const Recruteur = User.discriminator('Recruteur', recruteurSchema);
export default Recruteur;