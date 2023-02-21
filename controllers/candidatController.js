import Candidat from "../models/candidat.js";
import bcrypt from 'bcrypt';

export const registerCandidat = async (req, res) => {
    const { username, password, email, nom, prenom, adresse, phone, sexe } = req.body;
    bcrypt.hash(password, 10).then(async (hashedpassword) => {
        await Candidat.create({
            username, password: hashedpassword, email, nom, prenom, adresse, phone, sexe
        }).then(() => {
            res.json('Registered Successfully!');
        }).catch((err) => {
            res.status(400).json({ error: err })
        })
    });
}