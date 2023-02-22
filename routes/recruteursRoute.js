import  express   from 'express';
import {auth} from '../middlewares/auth.js';
import {getMyJobs} from '../controllers/JobController.js';
import {editCandidatureState} from '../controllers/candidatureController.js'
import {registerRecruteur} from '../controllers/recruteurController.js';
export  const recruteurRouter = express.Router();

recruteurRouter.post('/register', registerRecruteur);


//edit a specific 'candidature's state | roles : [recruteur]
recruteurRouter.put('/candidatures/:id/edit',auth(['Recruteur']), editCandidatureState);



//get all jobs intoduced by a recruiter | roles : [recruteur]
recruteurRouter.get('/jobs',auth(['Recruteur']),getMyJobs);



