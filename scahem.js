const Joi = require('joi');

module.exports.ListingSchema = Joi.object({
    listings:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        country:Joi.string().required(),
        location:Joi.string().required(),
        price:Joi.number().required().min(0),
        image:Joi.string().allow("",null) // its allow image as empty string or null 
    }).required()
})

module.exports.reviewSchema = Joi.object({
    Review:Joi.object({
        comment:Joi.string().required(),
        rating:Joi.number().required().min(1).max(5)
    }).required()
})

