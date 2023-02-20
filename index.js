import  express   from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyparser from 'body-parser';
// import { createTokens , validateToken,candidat} from './jwt.js';
mongoose.set('strictQuery', false);
import { registerCandidat } from './controllers/candidatController.js';
import { registerRecruteur } from './controllers/recruteurController.js';
import { Login } from './controllers/UserController.js';
import {validateToken,auth} from './middlewares/auth.js';
const app = express();
// app.use(express.urlencoded({extended: true}));
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(express.json());
app.use(cookieParser());
mongoose.connect("mongodb+srv://riadhidir5:bIKlHStd0ezgzaFQ@cluster0.aha4g2i.mongodb.net/Cluster0?retryWrites=true&w=majority").then(()=>{
app.listen(3000, ()=>{console.log('http://localhost:3000')});
});


// app.post('/admin/register',async (req,res)=>{
//     const {candidat,
//         cv,
//         job
//         } = req.query
//     const admin = await Candidature.create({
//         candidat,
//         cv,
// job
//     }) 
    
    
   
// res.json(admin);
// });

// app.post('/login', async (req,res)=>{
//     const {username, password} = req.query;
//     const user = await User.findOne({username:username}).exec();
//     if(!user) res.status(400).json({error:"user doesnt exists"})
//     const dbPassowrd = user.password;
//     if(password != dbPassowrd){
//      res.status(400).json({error:"wrong username and password combination "})

//     }else{
//         const accessToken = createTokens(user);
//         res.cookie('access-token',accessToken,{ httpOnly:true})
//         res.json("logged in");
//     }

// });
// app.get('/profile',validateToken,(req,res)=>{
//     res.json('profile');

// })
// app.get('/onlycandidat', candidat, (req,res)=>{
//     res.json('authorized')
// })
app.post('/login',Login);
app.post('/candidat', registerCandidat); 
app.post('/recruteur', registerRecruteur);

app.get('/profile',auth(['Recruteur']),(req,res)=>{
    res.json('profile')
})
