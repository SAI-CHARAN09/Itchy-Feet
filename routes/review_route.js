const express = require("express");
const router=express.Router({mergeParams:true})
const wrapAsync=require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const {reviewSchema } =require("../scahem.js");
const Review = require("../model/review.js");
const listing  = require("../model/listing");
const {validatereviewSchema,isLoggedIn,isReviewAuthor}=require('../middleware.js')
const reviewController=require("../controller/reviews.js");
//Review route 

router.post("/",isLoggedIn,validatereviewSchema,wrapAsync(reviewController.createReview))

//delete review route
router.delete("/:reviewID",isReviewAuthor,wrapAsync(reviewController.deleteReview))

module.exports=router;