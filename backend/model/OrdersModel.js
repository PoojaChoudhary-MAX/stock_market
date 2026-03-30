// mongoose se 'model' function import kar rahe hain
// model ka use schema ko MongoDB collection se connect karne ke liye hota hai
const { model } = require("mongoose");


// yaha hum OrdersSchema import kar rahe hain jo humne schema file me define kiya tha
// ye batata hai data ka structure kya hoga
const { OrdersSchema } = require("../schemas/OrdersSchema");


// yaha hum ek model create kar rahe hain
// "order" = MongoDB collection ka naam hoga
// OrdersSchema = structure define karega collection ke data ka
// model ke through hi hum database operations (CRUD) karte hain
const OrdersModel = model("order", OrdersSchema);


// is model ko export kar rahe hain taaki dusri files (routes/controllers) me use kar sake
module.exports = { OrdersModel };