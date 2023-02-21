import Recruteur from '../models/Recruteur.js'
import bcrypt from 'bcrypt';

export const registerRecruteur = async (req,res)=>{
    const {username, password, email,nom ,adresse,phone} = req.body;
    bcrypt.hash(password, 10).then(async (password)=>{
        await Recruteur.create({
            username, password, email,nom,  adresse,phone,
        }).then(()=>{
            res.json('Resgistered Successfully!');
        }).catch((err)=>{
            res.status(400).json({error:err});
        });
    });
}