import Categorie from "../models/Categorie.js"

// post /categories/create
export  const addCategorie  =async(req,res)=>{
    const categorie = await Categorie.create({
        titre:req.query.titre
    });

    res.json('categorie ajouté')
}
//  get /categories/:id
export const getCategorie =(req,res)=>{
    const categorie = Categorie.find().then((result)=>{
        res.json(result); 
    })
}
// DELETE /categories/
export const deleteCategorie = async (req,res)=>{
    const categorieId = req.params.id;
    await Categorie.findByIdAndDelete(categorieId)
    res.json("deleted")
}
export const editCategorie = async (req,res)=>{
   const categorie =  await Categorie.findByIdAndUpdate(req.params.id,{titre:req.body.titre});

    res.json("updated")
}