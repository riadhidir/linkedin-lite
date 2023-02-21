import Job from '../models/Job.js';
import Recruteur from '../models/Recruteur.js'
import { getUserId } from '../utilities/userUtilities.js';

export const addJob=async(req,res)=>{
    try{  
      const newJob=await Job.create ({recruteur:getUserId(req),description:req.body.description}); 
 res.status(201).json(newJob);
    }catch(err){
    res.status(400).json({error:err.message});
}
};  
    

export const deleteJob = async (req, res) => {

    const result = await Job.findByIdAndDelete(req.params.id).then((result)=>{
      if(!result)  res.status(400).json({ message: ' Job not found' });
      res.status(200).json({ message: 'Job deleted successfully' });
    }).catch((err)=>{
    res.status(500).json({ error: err.message });
    });

    
};


export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).json({ error: 'Job not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateJobById = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { description: req.body.description },
     
    );
    if (updatedJob) {
      res.status(200).json(updatedJob);
    } else {
      res.status(404).json({ error: 'Job not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// *
export const getAllJobs = async(req,res)=>{
  const jobs = await Job.find();
  res.json(jobs);
}

// *
export const getMyJobs = async(req,res)=>{
  const recruteur = getUserId(req); 
  const jobs = await Job.find({recruteur});
  res.json(jobs);

}