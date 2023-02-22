import  express   from 'express';
import mongoose from 'mongoose';
import { Login } from './controllers/UserController.js';
import {registerCandidat} from './controllers/candidatController.js'


import {categorieRouter} from './routes/categoriesRoute.js';
import {jobRouter} from './routes/jobsRout.js';
import { candidatureRouter } from './routes/candidaturesRoute.js';
import { recruteurRouter } from './routes/recruteursRoute.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://riadhidir5:bIKlHStd0ezgzaFQ@cluster0.aha4g2i.mongodb.net/Cluster0?retryWrites=true&w=majority").then(()=>{
app.listen(3000, ()=>{console.log('http://localhost:3000')});
});

app.use('/categories',categorieRouter);
app.use('/jobs',jobRouter);
app.use('/candidatures',candidatureRouter);
app.use('/recruteurs',recruteurRouter);
app.post('/candidats/register', registerCandidat); 
//     // login for all users
app.post('/login',Login);
// // register routs
