import Candidature from '../models/Candidature.js';
// import Admin from '../models/Candidature.js';
import Job from '../models/Job.js';
import { getUserId } from '../utilities/userUtilities.js';



export const getCandidature = async(req,res)=>{
    const candidature = await Candidature.findById(req.params.id).exec();
    res.json(candidature);
}

export const editCandidature = async(req,res)=>{
    const {etat} = req.body;
    const candidature = await Candidature.findByIdAndUpdate(req.params.id,{etat});
    res.json('updated Successfully!');
}
// /jobs/:id
// export const getAllCandidature = async (req,res)=>{
//     const candidature = await Candidature.find().populate('jobs').populate('users')
// } 

export const addCandidature = async (req,res)=>{
    const candidat = getUserId(req);
    const{cv} = req.body;
    await Candidature.create({
        candidat, cv,job:req.params.id
    });
    res.json('application sent Succesfully')
}

// export const DeleteCandidatures = async (req, res)=>{
// const job = await Job.deleteOne({_id:res.params.id});
// res.json('condidature supprimé');
// }

