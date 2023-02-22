import  express   from 'express';
import {auth} from '../middlewares/auth.js';
import multer from 'multer';

import { getAllJobs,addJob,deleteJob, getJobById, updateJobById } from '../controllers/JobController.js';
import { addCandidature } from '../controllers/candidatureController.js';
export  const jobRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+".pdf")
    },
  });
const upload = multer({ storage: storage });
//add a 'candidature' | roles : [candidat]
jobRouter.post('/:id/apply',[auth(['Candidat']), upload.single('cv')], addCandidature);
jobRouter.post('/', auth(['Recruteur']),addJob);
jobRouter.delete('/:id', auth(['Recruteur']),deleteJob);
jobRouter.get('/:id', auth(['Recruteur','Candidat']),getJobById);
jobRouter.put('/:id', auth(['Recruteur']),updateJobById);
//get all jobs available | roles : [recruteur, candidat]
jobRouter.get('/',auth(['Recruteur', 'Candidat']),getAllJobs);