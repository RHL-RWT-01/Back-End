const {Admin} =require('../db/index');

function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({
        username: username,
        password: password
    })
      .then((val)=>{
        if(val){
            next();
        }else{
            res.status(401).send('admin not found');
        }
      })
}

module.exports = adminMiddleware;