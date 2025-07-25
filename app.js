if(process.env.NODE_ENV != "poduction"){
require('dotenv').config()
}

const express = require("express");
const app= express();
const mongoose = require("mongoose");
const listing  = require("./model/listing");
const port=8080;
const path=require("path");
const methodOverride=require("method-override");
const ejsmate=require("ejs-mate");
const wrapAsync=require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const {ListingSchema} =require("./scahem.js");
const {reviewSchema } =require("./scahem.js");
const Review = require("./model/review.js");
const listingsRoute=require("./routes/listings_route.js");
const reviewsRoute=require('./routes/review_route.js')
const userRoute=require("./routes/user_route.js")
var session = require('express-session')
const MongoStore = require('connect-mongo');
var cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const passport=require('passport')
const LocalStrategy=require('passport-local')
const User=require('./model/user.js')
const multer=require("multer");
const upload = multer({ dest: 'uploads/' })
const DB_ATLAS_URL=process.env.ATLAS_URL;

//connnection with database
const mongoose_url="mongodb://127.0.0.1:27017/wanderlust"
async function main(){
    await mongoose.connect(DB_ATLAS_URL)
    // await mongoose.connect(mongoose_url)
}
main().then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log("Occured an error in Db Connection");
    console.log(err);
})


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"));
app.engine("ejs",ejsmate);
app.use(express.static(path.join(__dirname,"/public")));

const store=MongoStore.create({
    mongoUrl:DB_ATLAS_URL,
    crypto: {
    secret: process.env.SECRET
  },
  touchAfter:24*3600,
});

store.on("error",()=>{
    console.log("Error in Mongo Store Session",err)
})
app.use(cookieParser("secretcode"))
app.use(session({
    store,
    secret:process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    },
}))
app.use(flash());


app.use(passport.initialize())
app.use(passport.session())
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next()
})





app.use("/listings",listingsRoute);
app.use("/listings/:id/reviews",reviewsRoute);
app.use("/",userRoute);

// app.use('/demo',async(req,res)=>{
//     let fakeUser=new User({
//         email:"varshith@gmail.com",
//         username:"Varshith1"
//     })
//     let Registered11=await User.register(fakeUser,"Welcome@123");
//     res.send(Registered11)
// })

// app.get("/addlisting",async(req,res)=>{
//     let sampleList=new listing({
//         title:"Hello",
//         description:"I am here to serve you",
//         price:9000,
//         location:"Hyd",
//         country:"Inida",
//     });
//     await sampleList.save();
//     console.log("Succesfully Entered");
//     res.send("Done");
// })

app.all("*",(req,res,next)=>{
    throw new ExpressError(404,"Page not found")
})
app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong"}=err;
    res.status(statusCode).render("error.ejs",{err})
    // res.status(statusCode).send(message);
})

app.listen(8080,()=>{
    console.log(`Using port here ${port}`)
});

