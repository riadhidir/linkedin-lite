import  express   from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyparser from 'body-parser';
// import { createTokens , validateToken,candidat} from './jwt.js';
mongoose.set('strictQuery', false);
import { registerCandidat } from './controllers/candidatController.js';
import { getCandidature ,editCandidature, addCandidature} from './controllers/candidatureController.js';
import { registerRecruteur } from './controllers/recruteurController.js';
import { Login } from './controllers/UserController.js';
import {auth} from './middlewares/auth.js';
import { getAllJobs,getMyJobs,addJob,deleteJob, getJobById, updateJobById } from './controllers/JobController.js';
const app = express();
// app.use(express.urlencoded({extended: true}));
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(express.json());
app.use(cookieParser());
mongoose.connect("mongodb+srv://riadhidir5:bIKlHStd0ezgzaFQ@cluster0.aha4g2i.mongodb.net/Cluster0?retryWrites=true&w=majority").then(()=>{
app.listen(3000, ()=>{console.log('http://localhost:3000')});
});
app.use(express.urlencoded({extended:true}));


    // login for all users
app.post('/login',Login);
// register routs
app.post('/candidats/register', registerCandidat); 
app.post('/recruteur/register', registerRecruteur);

//get a specific 'candidature' | roles : [recruteur]
app.get('/candidatures/:id',auth(['Recruteur']), getCandidature);
//edit a specific 'candidature's state | roles : [recruteur]
app.post('/candidatures/:id/edit',auth(['Recruteur']), editCandidature);
//edit all jobs available | roles : [recruteur, candidat]
app.get('/jobs',auth(['Recruteur', 'Candidat']),getAllJobs);
//edit all jobs intoduced by a recruiter | roles : [recruteur]
app.get('/recruteur/jobs',auth(['Recruteur']),getMyJobs);

//add a 'candidature' | roles : [candidat]
app.post('/jobs/:id/apply',auth(['Candidat']), addCandidature);

// ignore this for now :)
app.get('/profile',auth(['Recruteur','Admin', 'Candidat']),(req,res)=>{
    res.json('profile')
})

app.post('/jobs', auth(['Recruteur']),addJob);
app.post('/jobs/:id', auth(['Recruteur']),deleteJob);
app.get('/jobs/:id', auth(['Recruteur']),getJobById);
app.put('/jobs/:id', auth(['Recruteur']),updateJobById);


