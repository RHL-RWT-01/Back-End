require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const {Admin} =require('../db/index');
function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    token = token.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    if(decoded.id){
        next();
    }else{
        res.status(401).send('admin not found');
    }
    

    // const username = req.headers.username;
    // const password = req.headers.password;

    // Admin.findOne({
    //     username: username,
    //     password: password
    // })
    //   .then((val)=>{
    //     if(val){
    //         next();
    //     }else{
    //         res.status(401).send('admin not found');
    //     }
    //   })
}

module.exports = adminMiddleware;