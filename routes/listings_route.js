    const express = require("express");
    const router=express.Router()
    const listing  = require("../model/listing");
    const wrapAsync=require("../utils/wrapAsync");
    const {isLoggedIn, isOwner,validateSchema} =require("../middleware.js");
    const listingController=require("../controller/listings.js");
    const multer  = require('multer')
    const {storage}=require('../cloudConfig.js');
    const upload = multer({ storage })

    //Index route
    router
    .route("/")
    .get(wrapAsync(listingController.index));

    router
    .route("/new")
    .get(isLoggedIn,listingController.renderNewForm)//New Route
    .post(upload.single('listings[image]'),validateSchema,isLoggedIn,wrapAsync(listingController.createListing))//create route

    router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))    //Show route
    .put(isLoggedIn,upload.single('listings[image]'),isOwner,validateSchema,wrapAsync(listingController.updateForm))     //update
    .delete(isLoggedIn,wrapAsync(listingController.deleteListing))    //Delete route


    //edit route
    router
    .route("/:id/edit")
    .get(isLoggedIn,isOwner,wrapAsync(listingController.editForm))
   

    module.exports=router;