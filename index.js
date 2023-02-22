import  express   from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyparser from 'body-parser';
import {addCategorie, deleteCategorie,editCategorie,getAllCategories} from './controllers/CategorieController.js';
import { registerCandidat } from './controllers/candidatController.js';
import { getCandidature ,editCandidature, addCandidature, editCandidatureState} from './controllers/candidatureController.js';
import { registerRecruteur } from './controllers/recruteurController.js';
import { Login } from './controllers/UserController.js';
import {auth} from './middlewares/auth.js';
import { getAllJobs,getMyJobs,addJob,deleteJob, getJobById, updateJobById } from './controllers/JobController.js';


import multer from 'multer';
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
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
mongoose.set('strictQuery', false);


// app.use(bodyparser.urlencoded({extended:true}))
// app.use(bodyparser.json())

app.use(cookieParser());

mongoose.connect("mongodb+srv://riadhidir5:bIKlHStd0ezgzaFQ@cluster0.aha4g2i.mongodb.net/Cluster0?retryWrites=true&w=majority").then(()=>{
app.listen(3000, ()=>{console.log('http://localhost:3000')});
});



app.post('/categories',auth(['Admin']),(addCategorie));
app.get('/categories',auth(['Admin']),getAllCategories);
app.delete('/categories/:id',auth(['Admin']),deleteCategorie);
app.put('/categories/:id',auth(['Admin']),editCategorie);
    // login for all users
app.post('/login',Login);
// register routs
app.post('/candidats/register', registerCandidat); 
app.post('/recruteurs/register', registerRecruteur);

//get a specific 'candidature' | roles : [recruteur]
app.get('/candidatures/:id',auth(['Recruteur']), getCandidature);
//edit a specific 'candidature's state | roles : [recruteur]
app.put('/recruteurs/candidatures/:id/edit',auth(['Recruteur']), editCandidatureState);
app.put('/candidatures/:id/edit',[auth(['Candidat']),upload.single('cv')], editCandidature);

//get all jobs available | roles : [recruteur, candidat]
app.get('/jobs',auth(['Recruteur', 'Candidat']),getAllJobs);
//get all jobs intoduced by a recruiter | roles : [recruteur]
app.get('/recruteurs/jobs',auth(['Recruteur']),getMyJobs);

//add a 'candidature' | roles : [candidat]
app.post('/jobs/:id/apply',[auth(['Candidat']), upload.single('cv')], addCandidature);

// ignore this for now :)
app.get('/profile',auth(['Recruteur','Admin', 'Candidat']),(req,res)=>{
    res.json('profile')
})

app.post('/jobs', auth(['Recruteur']),addJob);
app.delete('/jobs/:id', auth(['Recruteur']),deleteJob);
app.get('/jobs/:id', auth(['Recruteur']),getJobById);
app.put('/jobs/:id', auth(['Recruteur']),updateJobById);


