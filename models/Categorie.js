import mongoose from 'mongoose'
const {Schema, model} = mongoose;

const categorieSchema = new Schema({

    titre:{
        type:String,
        required:true
    }
},{timestamps:true});

const Categorie = new model('Categorie', categorieSchema);
export default Categorie;