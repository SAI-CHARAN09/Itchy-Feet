const { model } = require("mongoose");
const listing  = require("../model/listing");
const ExpressError = require("../utils/ExpressError");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken= process.env.MAP_TOKEN;
const geocodingClient= mbxGeocoding({accessToken:mapToken});

module.exports.index=(async(req,res)=>{
    const alllistings= await listing.find({});
    res.render("listings/index.ejs",{alllistings});
})

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs")
}

module.exports.showListing=async(req,res)=>{
    let {id}=req.params;
    // res.send(id)
    const listingone=await listing.findById(id)
    .populate({path:"reviews",
        populate:{path:"author"}
    })
    .populate("owner");
    // res.send(listingone.image);
    // console.log(listingone)
    if(!listingone){
        req.flash("error","listing doesn't exists");
        res.redirect("/listings")
    }
    res.render("listings/show.ejs",{listingone});
}

module.exports.createListing=async (req,res,next)=>{
    // const listingnew =req.body.listings;
    // res.send(listingnew);
    // try{
    // if(!req.body.listing){
    //     throw new ExpressError(400,"Send valid data for list");
    // }
    console.log("after the new post command")
    let response=await geocodingClient.forwardGeocode({
        query: req.body.listings.location,
        limit: 1
      })
        .send()
    console.log(response.body.features[0].geometry)
    let url= req.file.path;
    let filename=req.file.filename;
    console.log("after the new post command")
    const newListing = new listing(req.body.listings); //adding the data to collection
    newListing.owner=req.user._id;
    newListing.image={url,filename};
    newListing.geometry=response.body.features[0].geometry;
    let sample=await newListing.save(); //saving the document
    console.log(sample)
    req.flash("success", "Succesfully Registered"); //it is flashed on creation f we use that key 'success'
    res.redirect("/listings")    
//     }
//     catch(err){
//         next(err);
//     }
}

module.exports.editForm=async(req,res)=>{
    let {id}=req.params;
    const listingone=await listing.findById(id);
    if(!listingone){
        req.flash("error","listing doesn't exists");
        res.redirect("/listings")
    }
    console.log(listingone.image.url)
    let  Original=listingone.image.url;
    Original=Original.replace("/upload","/upload/h_300,w_250");
    console.log(listingone.image.url);
    console.log(Original)
    res.render("listings/edit.ejs",{listingone,Original});
}


// module.exports.updateListing = async (req, res) => {
//     let response = await geocodingClient.forwardGeocode({
//         query: req.body.listings.location,
//         limit: 1
//     })
//         .send()
    
//     let { id } = req.params;
//     const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listings });

//     if (typeof req.file !== "undefined") {
//         listing.image = {
//             url: req.file.path,
//             filename: req.file.filename
//         };
//     }
//     listing.geometry = response.body.features[0].geometry;
//     await listing.save();

//     req.flash("success", "listing is updated successfully");
//     res.redirect(`/listings/${id}`);
// }

module.exports.updateForm=async(req,res,next)=>{
        console.log(req.body);
    if(!req.body.listings){
        throw new ExpressError(400,"Send valid data for list");
    }
    let response=await geocodingClient.forwardGeocode({
        query: req.body.listings.location,
        limit: 1
      })
        .send()
    const {id}=req.params;
    const listingone =await listing.findById(id);
    console.log(listingone)
    if(!listingone.owner._id.equals(res.locals.currUser._id)){
                req.flash("error","You're not owner for this listing");
                res.redirect(`/listings/${id}`);
            }
    let newListing=await listing.findByIdAndUpdate(id,{...req.body.listings});
    
    if(typeof req.file!=="undefined"){
        let url= req.file.path;
        let filename=req.file.filename;
        newListing.image={url,filename};
    }
        newListing.geometry=response.body.features[0].geometry;
        let sample=await newListing.save(); //saving the document
        console.log(sample)
        await newListing.save();

    req.flash("success", "Succesfully Updated a Listing"); //it is flashed on creation f we use that key 'success'
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing=async(req,res)=>{
    const {id}=req.params;
    await listing.findByIdAndDelete(id)
    req.flash("success", "Succesfully Deleted a Listing"); //it is flashed on creation f we use that key 'success'
    res.redirect("/listings");
}