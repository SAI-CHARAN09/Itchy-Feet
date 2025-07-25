const express = require("express");
const router=express.Router()
const User=require('../model/user');
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { route } = require("./listings_route");
const { saveRedirectUrl } = require("../middleware");
const userController=require("../controller/user")

router
.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signUp))

router
.route("/login")
.get(userController.renderLogin)
.post(saveRedirectUrl,passport.authenticate('local',{failureRedirect: '/login',}),userController.login);

router
.route("/logout")
.get(userController.logout)

module.exports=router;