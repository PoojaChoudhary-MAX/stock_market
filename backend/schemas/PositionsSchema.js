// mongoose se Schema import kar rahe hain
// Schema ka use hota hai MongoDB me data ka structure define karne ke liye
const { Schema } = require("mongoose");


// yaha hum PositionSchema bana rahe hain
// ye define karega ki "positions" collection me data ka format kya hoga
const PositionsSchema = new Schema({

    // product = kis type ka product hai (CNC, MIS etc.)
    // String type kyunki text value hai
    product: String,

    // name = stock ka naam (jaise TCS, Infosys)
    // String type
    name: String,

    // qty = kitne shares currently hold ho rahe hain
    // Number type
    qty: Number,

    // avg = average buying price
    // Number type
    avg: Number,

    // price = current market price
    // Number type
    price: Number,

    // net = total profit ya loss
    // Number type (calculation ke liye important)
    net: Number,

    // day = aaj ka profit/loss
    // ideally Number hona chahiye (better calculation ke liye)
    day: String,

    // isLoss = true/false (loss ho raha hai ya nahi)
    // Boolean type (true = loss, false = profit)
    isLoss: Boolean,
});


// schema ko export kar rahe hain taaki dusri files me use ho sake
module.exports = { PositionsSchema };