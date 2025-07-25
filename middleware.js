const { ListingSchema,reviewSchema } = require("./scahem");
const listing  = require("./model/listing");
const Review = require("./model/review.js");
const ExpressError = require("./utils/ExpressError");


module.exports.isLoggedIn=(req,res,next)=>{
    console.log(req.originalUrl)
    req.session.redirectUrl=req.originalUrl;
    if(!req.isAuthenticated()){
    req.flash("error","Please Login to make changes")
    return res.redirect("/login")
    }
    next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let listingone=await listing.findById(id);
    if(!listingone.owner.equals(res.locals.currUser._id)){
        req.flash("error","You're not owner for this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateSchema=(req,res,next)=>{
    let result =ListingSchema.validate(req.body)
    console.log(result)
    if(result.error){
        console.log('inside');
        let errorMsg=result.error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errorMsg);
    }
    else{
        next();
    }
}

module.exports.validatereviewSchema=(req,res,next)=>{
    let result =reviewSchema.validate(req.body)
    console.log(result)
    if(result.error){
        console.log('inside');
        let errorMsg=result.error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errorMsg);
    }
    else{
        next();
    }
}

module.exports.isReviewAuthor=async(req,res,next)=>{
    let {id,reviewID}=req.params;
    let review=await Review.findById(reviewID);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You didn' created this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}
