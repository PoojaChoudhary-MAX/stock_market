// mongoose se Schema import kar rahe hain
// Schema ka use data ka structure define karne ke liye hota hai
const { Schema } = require("mongoose");


// yaha hum OrderSchema bana rahe hain (correct spelling)
// ye batata hai ki "orders" collection me data ka format kya hoga
const OrdersSchema = new Schema({

    // name = stock ka naam (jaise TCS, Infosys)
    // String type kyunki text data hai
    name: String,

    // qty = kitne shares buy/sell kiye gaye
    // Number type kyunki numeric value hai
    qty: Number,

    // price = jis price par order place hua
    // Number type
    price: Number,

    // mode = order type (BUY / SELL)
    // String type kyunki text value hai
    mode: String,
});


// is schema ko export kar rahe hain taaki dusri files me use kar sake
module.exports = { OrdersSchema };