// mongoose se 'model' function import kar rahe hain
// model ka use hota hai schema ko MongoDB collection se connect karne ke liye
const { model } = require("mongoose");


// yaha hum apna previously defined HoldingSchema import kar rahe hain
// ye schema batata hai data ka structure kya hoga
const { HoldingsSchema } = require('../schemas/HoldingsSchema');


// yaha hum ek model create kar rahe hain
// "holding" = MongoDB collection ka naam hoga
// HoldingSchema = structure define karega collection ke data ka
// model ke through hi hum database me CRUD operations (create, read, update, delete) karte hain
const HoldingsModel = model("holding", HoldingsSchema);


// is model ko export kar rahe hain taaki dusri files (like controllers/routes) me use kar sake
module.exports = { HoldingsModel };