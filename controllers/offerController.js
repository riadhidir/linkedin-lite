import Job from '../models/Job.js';
import Recruteur from '../models/Recruteur.js'

export const addJob=async(req,res)=>{
    
    try{
      const newJob=await Job.create ({recruteur:req.query.recruteur,description:req.query.description}); 
 res.status(201).json(newJob);
    }catch(err){
    res.status(400).json({error:err.message});
}
};  
    

export const deleteJob = async (req, res) => {
  try {
    const result = await Job.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 1) {
      res.status(200).json({ message: 'Job deleted successfully' });
    } else {
      res.status(404).json({ error: 'Job not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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
      { new: true }
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
