import Categorie from "../models/Categorie.js"


export  const addCategorie  = async (req,res)=>{
    const categorie = await Categorie.create({
        titre:req.query.titre
    });

    res.json('categorie ajouté')
}