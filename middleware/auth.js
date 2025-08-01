const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user; // Attach user to request object
        next();
    } catch (err) {
        console.error(err.message);
        res.status(401).json({ msg: 'Token is not valid' });    
    }
};