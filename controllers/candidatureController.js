import Candidature from '../models/Candidature.js';
// import Admin from '../models/Candidature.js';
import Job from '../models/Job.js';
import fs from 'fs';

import { getUserId } from '../utilities/userUtilities.js';
import Candidat from '../models/candidat.js';


export const getCandidature = async(req,res)=>{
    const candidature = await Candidature.findById(req.params.id).exec();
    const {job,candidat,_id,etat} = candidature;
    // const f = ".file:///C:/Users/pc/Desktop/linkedin-lite/public/cv-1676988759473-83815496.pdf";
    res.json({cv: "../"+candidature.cv,
    job,candidat,_id,etat});
}

export const editCandidatureState = async(req,res)=>{
    const {etat} = req.body;
    const candidature = await Candidature.findByIdAndUpdate(req.params.id,{etat});
    res.json('updated Successfully!');
}
export const editCandidature = async(req,res)=>{
    const cv = req.file.filename;

        const candidature = await Candidature.findByIdAndUpdate(req.params.id, {cv});
  
    fs.unlink("./public/"+candidature.cv,(err)=>{
        if (err) res.status(400).json({error:err});
    });
    res.json('application updated successfully!');
}
// /jobs/:id
// export const getAllCandidature = async (req,res)=>{
//     const candidature = await Candidature.find().populate('jobs').populate('users')
// } 

export const addCandidature = async (req,res)=>{
    const candidat = getUserId(req);
    const cv = req.file.filename;
    await Candidature.create({
        candidat, cv
        ,job:req.params.id
    });  
    res.json("applied Successfully");
}

// export const DeleteCandidatures = async (req, res)=>{
// const job = await Job.deleteOne({_id:res.params.id});
// res.json('condidature supprimé');
// }

