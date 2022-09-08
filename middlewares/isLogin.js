const isLogin = (req, res, next) => {
    const {user} = req.session;
    
    if(!user){
    return res.redirect("home/login");
    }

    res.locals.user = user;
    next();
    }
    module.exports = isLogin;