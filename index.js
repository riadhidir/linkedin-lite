import  express   from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { createTokens , validateToken,candidat} from './jwt.js';
import User from './models/User.js';
import Admin from './models/Admin.js';

import Recruteur from './models/Recruteur.js';
import adminController from './controllers/adminController';
const app = express();

app.get('/',adminController.ajouteradmin)
app.use(express.json());
app.use(cookieParser());
mongoose.connect("mongodb+srv://riadhidir5:bIKlHStd0ezgzaFQ@cluster0.aha4g2i.mongodb.net/Cluster0?retryWrites=true&w=majority").then(()=>{
app.listen(3000, ()=>{console.log('http://localhost:3000')});
});

app.post('/admin/register',async (req,res)=>{
    const {username, password, email,
        nom,
        phone,
        adresse} = req.query
    const admin = await Recruteur.create({
        username,password,email,nom,
        phone,
        adresse
    }) 
    
    
   
res.json(admin);
});

app.post('/login', async (req,res)=>{
    const {username, password} = req.query;
    const user = await User.findOne({username:username}).exec();
    if(!user) res.status(400).json({error:"user doesnt exists"})
    const dbPassowrd = user.password;
    if(password != dbPassowrd){
     res.status(400).json({error:"wrong username and password combination "})

    }else{
        const accessToken = createTokens(user);
        res.cookie('access-token',accessToken,{ httpOnly:true})
        res.json("logged in");
    }

});
app.get('/profile',validateToken,(req,res)=>{
    res.json('profile');

})
app.get('/onlycandidat', candidat, (req,res)=>{
    res.json('authorized')
})
// listen for requires
// middleware & static files
 
// app.use(express.static('public'));

// app.use(express.urlencoded({extended: true}));

