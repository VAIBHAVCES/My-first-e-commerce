const isLoggedIn= (req,res,next)=>{;
    console.log("checking autheticatoin");
    console.log(req.isAuthenticated());
    
    if(!req.isAuthenticated()){
        req.flash('error','You need to login first ');
        res.redirect('/login');
    }else{
        console.log("i am success now time for next ");
        next();
    }
}

module.exports = {
    isLoggedIn:isLoggedIn
}