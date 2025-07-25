const User=require('../model/user');


module.exports.renderSignupForm=(req,res)=>{
    res.render("user/signup.ejs");
}
module.exports.signUp=async(req,res)=>{
    try{
    let {username,email,password}=req.body;
    let fUser=new User({email,username})
    let Registered11=await User.register(fUser,password);
    req.login(Registered11,(err)=>{
        if(err){
            next(err);
        }
    req.flash("success","Welcome to Wanderlust")
    res.redirect("/listings")
})}
    catch(err){
        req.flash("error",err.message);
        res.redirect("/signup")
    } 
}
module.exports.renderLogin=(req,res)=>{
    res.render("user/login.ejs");
}
module.exports.login=async(req,res)=> {
    req.flash("success","Welcome to Wanderlust")
    let redirectUrl=res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl)
}
module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","You Logged out Successfully");
        res.redirect("/listings")
    })
}