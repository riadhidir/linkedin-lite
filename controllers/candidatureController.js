import Candidature from '../models/Candidature.js';
// import Admin from '../models/Candidature.js';
import Job from '../models/Job.js';


// get /candidatures/:id
export const getCandidature = async(req,res)=>{
    const candidature = await Candidature.findById(req.params.id).exec();
    res.json(candidature);
}

// /jobs/:id
export const getAllCandidature = async (req,res)=>{
    const candidature = await Candidature.find().populate('jobs').populate('users')
} 


// export const DeleteCandidatures = async (req, res)=>{
// const job = await Job.deleteOne({_id:res.params.id});
// res.json('condidature supprimé');
// }

