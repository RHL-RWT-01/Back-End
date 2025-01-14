const {User} =require('../db');

function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username: username,
        password: password
    })
      .then((val)=>{
        if(val){
            next();
        }else{
            res.status(401).send('Unauthorized');
        }
      })
}

module.exports = adminMiddleware;