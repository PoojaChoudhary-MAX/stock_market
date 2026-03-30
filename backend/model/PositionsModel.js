// mongoose se 'model' import kar rahe hain
// model ka use schema ko MongoDB collection se connect karne ke liye hota hai
const { model } = require("mongoose");


// yaha hum PositionSchema import kar rahe hain (schema file se)
// dhyaan: schema import karna hai, model nahi
const { PositionsSchema } = require("../schemas/PositionsSchema");


// yaha hum model create kar rahe hain
// "Position" = model name (Mongoose isko plural karke "positions" collection bana dega)
// PositionSchema = data ka structure define karega
const PositionsModel = new model("Position", PositionsSchema);


// model ko export kar rahe hain taaki dusri files me use ho sake
module.exports = { PositionsModel };