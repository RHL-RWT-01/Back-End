require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

function userMiddleware(req, res, next) {

    const token = req.headers.authorization;
    token = token.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    if(decoded.username){
        next();
    }else{
        res.status(401).send('User not found');
    }

    // const username = req.headers.username;
    // const password = req.headers.password;

    // User.findOne({
    //     username: username,
    //     password: password
    // })
    //   .then((val)=>{
    //     if(val){
    //         next();
    //     }else{
    //         res.status(401).send('User not found');
    //     }
    //   })
}

module.exports = userMiddleware;