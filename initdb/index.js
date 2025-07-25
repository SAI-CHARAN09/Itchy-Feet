require('dotenv').config();  // Load environment variables

const mongoose = require("mongoose");
const initData = require("./data");
const listing = require("../model/listing");
const mongoose_url = "mongodb://127.0.0.1:27017/wanderlust";
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN; // Mapbox token from .env
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

async function main() {
  await mongoose.connect(mongoose_url);
}
main()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Unable to connect DB");
  });

const getCoordinates = async (location) => {
  try {
    let response = await geocodingClient
      .forwardGeocode({
        query: location,
        limit: 1,
      })
      .send();

    // If there's a result, return geometry (coordinates)
    if (response.body.features.length > 0) {
      return response.body.features[0].geometry;
    } else {
      return null; // return null if no results are found
    }
  } catch (error) {
    console.log("Geocoding error: ", error);
    return null;
  }
};

const initDB = async () => {
  await listing.deleteMany({});
  
  const updatedData = await Promise.all(
    initData.data.map(async (obj) => {
      const geometry = await getCoordinates(obj.location);
      return {
        ...obj,
        owner: '67a8844672960bd6dd2c6d5b',
        geometry: geometry, // Add geometry to the object
      };
    })
  );

  await listing.insertMany(updatedData);
  console.log("Entered data with geometry");
};

initDB();
