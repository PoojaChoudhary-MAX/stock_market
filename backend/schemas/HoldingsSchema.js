// mongoose se Schema import kar rahe hain
// Schema ka use hota hai database ke data ka structure define karne ke liye
const { Schema } = require("mongoose");


// yaha hum ek new schema bana rahe hain jiska naam HoldingSchema hai
// ye batayega ki "holdings" collection me data ka format kya hoga
const HoldingsSchema = new Schema({

    // stock ka naam store karega (jaise: TCS, Reliance)
    // String type ka hai kyunki text data hai
    name: String,

    // quantity batata hai ki kitne shares user ke paas hain
    // Number type kyunki ye numeric value hai
    qty: Number,

    // avg = average buying price per share
    // Number type kyunki calculation ke liye use hoga
    avg: Number,

    // price = current market price of the stock
    // Number type
    price: Number,

    // net = total profit ya loss
    // ideally ye Number hona chahiye (calculation ke liye better)
    // but yaha String use hua hai (shayad formatted value store karne ke liye)
    net: String,

    // day = aaj ka profit/loss
    // ye bhi ideally Number hona chahiye
    day: String,

});


// is schema ko export kar rahe hain taaki dusri files me use kar sake
// abhi sirf structure export ho raha hai, model nahi
module.exports = { HoldingsSchema };