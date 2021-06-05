import { TokenService } from '../services/token-service'

export function verifyJwt(req, res, next) {
    const token = req.headers('token');
    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    const decodedToken = TokenService.ValidateAndDecodeToken(token);

    next();
}


export function verifyAdmin(req, res, next) {

    const token = req.headers['token'];
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
    }

    const decodedToken = TokenService.ValidateAndDecodeToken(token);

    if (decodedToken['userTypeId'] === 2) {
        return next();
    }

    return res.status(403).json({ message: 'You do not have administrator privilages' });
}