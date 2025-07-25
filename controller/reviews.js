const Review = require("../model/review.js");
const listing  = require("../model/listing");

module.exports.createReview=async(req,res)=>{
    const {id}=req.params;
    const listingone= await listing.findById(id);
    console.log(listingone);
    const newReview =new Review(req.body.Review);
    console.dir(req.body);
    console.log(newReview);
    newReview.author = req.user._id;
    listingone.reviews.push(newReview);
    console.log(newReview)
     await newReview.save()
     await listingone.save()
     console.log("New Review");
     req.flash("success", "Succesfully Added a Review"); //it is flashed on creation f we use that key 'success'

     res.redirect(`/listings/${listingone._id}`)
}

module.exports.deleteReview=async(req,res)=>{
    const {id,reviewID}=req.params;
    const listingone= await listing.findByIdAndUpdate(id,{$pull: {reviews:reviewID}});
    const reviewone= await Review.findById(reviewID)
    console.log(reviewone)
    req.flash("success", "Succesfully Deleted a Review"); //it is flashed on creation f we use that key 'success'
    res.redirect(`/listings/${listingone._id}`)
}