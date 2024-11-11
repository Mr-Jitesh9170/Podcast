let jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    let token = req.header('Authorization');
    let data = token.split("Bearer ")
    token = data[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};   