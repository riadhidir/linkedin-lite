import jwt from 'jsonwebtoken';

// check if authenticated
// export const validateToken = (req, res, next) => {
//     const accessToken = req.cookies['access-token'];
//     if (!accessToken) return res.status(400).json({ error: "user not authenticated" });
//     try {
//         const validToken = jwt.verify(accessToken, "thisisasecretmessage");
//         if (validToken) {
//             res.authenticated = true;
//             return next();
//         }
//     } catch (err) {
//         return res.status(400).json({ error: err })
//     }
// }


// pass in roles permited to continue the action
// export const auth =(roles)=>{
//     return (req,res,next)=>{
//         const accessToken = req.cookies['access-token'];
//     if (!accessToken) return res.status(400).json({ error: "user not authenticated" });
//     try {
//         const validToken = jwt.verify(accessToken, "thisisasecretmessage");
//         if (validToken && roles.includes(validToken.role)) {
//             res.authenticated = true;
//             return next();
//         }
//         else if(validToken && !roles.includes(validToken.role)) {
//             res.status(401).json('action not Authorized');
//             // res.authenticated = true;
//             // return next();
//         }
//     } catch (err) {
//         return res.status(400).json({ error: err })
//     }
//     }
// }

export const auth =(roles)=>{
    return (req,res,next)=>{
        const accessToken = req.headers['authorization'];
      
    if (!accessToken) return res.status(400).json({ error: "user not authenticated" });
    try {
        const validToken = jwt.verify(accessToken, "thisisasecretmessage");
        if (validToken && roles.includes(validToken.role)) {
            res.authenticated = true;
            return next();
        }
        else if(validToken && !roles.includes(validToken.role)) {
            res.status(401).json('action not Authorized');
            // res.authenticated = true;
            // return next();
        }
    } catch (err) {
        return res.status(400).json({ error: err })
    }
    }
}