import User from "../models/User.js";
import bcrypt from 'bcrypt';
import {getUserId} from '../utilities/userUtilities.js';
// import { createTokens , validateToken,candidat} from './jwt.js';
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";

 const createTokens = (user) => {
    const accessToken = jwt.sign({ username: user.username, id: user._id, role: user.role }, 'thisisasecretmessage', { expiresIn: '15m' });
    return accessToken;
}
 


export const Login = async (req, res)=>{
    const {username , password} = req.body;
        const user = await User.findOne({username:username}).exec();
    
        if(!user) {res.status(400).json({error:"user doesnt exists"});}
        else{ 
            const dbPassowrd = user.password;
            bcrypt.compare(password,dbPassowrd).then((match)=>{
                 if(!match){
             res.status(400).json({error:"wrong username and password combination "});
        
            }else{
                
                const accessToken = createTokens(user);


                res.cookie('access-token',accessToken,{ httpOnly:true})
            

                res.json("logged in");
            }
            })
        }

       
}