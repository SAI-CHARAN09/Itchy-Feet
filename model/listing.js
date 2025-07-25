const mongoose = require("mongoose");
const schema=mongoose.Schema;
// const Review=require("./review");
const review = require("./review");
const user= require("./user");
const { string } = require("joi");

const ListingSchema=new schema({
    title:{
        type:String,
        // required:true,
    },
    description:String,
    image:{
        url:String,
        filename:String,
    },
    price:Number,
    location:String,
    country:String,
    reviews:([
        {
            type: schema.Types.ObjectId,ref:"Review",
        }
    ]),
    owner:{
        type: schema.Types.ObjectId,
        ref:"User",
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
})

ListingSchema.post("findOneAndDelete",async(data)=>{ //data=listing
    if(data){
        let res=await review.deleteMany({_id:{$in:data.reviews}})
        console.log(res);
    }
})

const listing = mongoose.model("listing",ListingSchema);
module.exports=listing;