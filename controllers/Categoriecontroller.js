import Categorie from "../models/Categorie.js"


export  const addCategorie  =(req,res)=>{
    const categorie = Categorie.create({
        titre:req.query.titre
    });

    res.json('categorie ajouté')
}