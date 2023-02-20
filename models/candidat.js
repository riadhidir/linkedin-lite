import mongoose from "mongoose";
import User from './User.js';

const { Schema, SchemaTypes,model } = mongoose;

const candidatSchema = new Schema(
  {
   
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    phone: { type: String, required: true },
    adresse: { type: String, required: true },
    sexe: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
  },
  
);

const Candidat = User.discriminator("Candidat", candidatSchema);
export default Candidat;
