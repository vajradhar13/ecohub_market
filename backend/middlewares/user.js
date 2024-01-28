const jwt = require("jsonwebtoken");
require("dotenv").config();

function userMiddleware(req, res, next){
    const token = req.headers.authorization
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken, process.env.SECRET);
    if(decodedValue.username()){
        next();
    }else{
        res.status(403).json({ msg : "User not authenticated"})
    }
}

module.exports = userMiddleware