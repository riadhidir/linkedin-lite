import User from "../models/User.js";
import bcrypt from 'bcrypt';
import {getUserId} from '../utilities/userUtilities.js';
// import { createTokens , validateToken,candidat} from './jwt.js';
import jwt from 'jsonwebtoken';




const generateAccessToken = (user) => {
    return jwt.sign({ username: user.username, id: user._id, role: user.role }, 'thisisasecretmessage', { expiresIn: '1800s' });
     
}
const generateRefreshToken = (user) => {
    return jwt.sign({ username: user.username, id: user._id, role: user.role }, 'thisisasecretmessage2', { expiresIn: '1y' });
     
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

                const accessToken = generateAccessToken(user);
                
                res.json({message:"logged in",accessToken });
            }
            })
        }

       
}