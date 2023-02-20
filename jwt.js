import jwt from 'jsonwebtoken';
export const createTokens = (user) => {
    const accessToken = jwt.sign({ username: user.username, id: user._id, role: user.role }, 'thisisasecretmessage', { expiresIn: '1h' });
    return accessToken;
}
export const validateToken = (req, res, next) => {
    const accessToken = req.cookies['access-token'];
    if (!accessToken) return res.status(400).json({ error: "user not authenticated" });
    try {
        const validToken = jwt.verify(accessToken, "thisisasecretmessage");
       
        if (validToken) {
            res.authenticated = true;
            return next();
        }
    } catch (err) {
        return res.status(400).json({ error: err })
    }
}

export const candidat = (req, res, next) => {
    const accessToken = req.cookies['access-token'];
    if (!accessToken) return res.status(400).json({ error: "user not authenticated" });
    try {
        const validToken = jwt.verify(accessToken, "thisisasecretmessage");
        if (validToken.role != 'admin') {
            return res.json('not authorized')

        } else {
            return next()
        }
    } catch (err) {
        return res.status(400).json({ error: err })
    }
}