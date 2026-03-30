require("dotenv").config(); 
// .env file se environment variables (PORT, MONGO_URL) load karne ke liye

const express = require("express"); 
// Express framework use kar rahe hain server banane ke liye

const mongoose = require("mongoose"); 
// MongoDB se connect hone ke liye mongoose use hota hai

const bodyParser = require("body-parser"); 
// client se aane wale JSON data ko read karne ke liye

const cors = require("cors"); 
// different origin (frontend-backend) ke beech request allow karne ke liye

const { HoldingsModel } = require("./model/HoldingsModel"); 
// Holdings collection ka model import kiya

const { PositionsModel } = require("./model/PositionsModel"); 
// Positions collection ka model import kiya

const { OrdersModel } = require("./model/OrdersModel"); 
// Orders collection ka model import kiya

const PORT = process.env.PORT || 3002; 
// server kis port par chalega (default: 3002)

const uri = process.env.MONGO_URL; 
// MongoDB connection URL .env se le rahe hain

const app = express(); 
// express app initialize kiya

app.use(cors()); 
// CORS enable kiya taaki frontend request bhej sake

app.use(bodyParser.json()); 
// JSON data ko parse karne ke liye middleware



// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });


//  GET HOLDINGS =
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({}); 
  // DB se saare holdings fetch kar rahe hain

  res.json(allHoldings); 
  // client ko JSON format me data bhej rahe hain
});

// ================== GET POSITIONS ==================
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({}); 
  // DB se saare positions fetch kar rahe hain

  res.json(allPositions); 
  // client ko JSON response bhej rahe hain
});

// ================== POST ORDER ==================
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,   // stock ka naam frontend se le rahe hain
    qty: req.body.qty,     // quantity frontend se
    price: req.body.price, // price frontend se
    mode: req.body.mode,   // buy/sell mode
  });

  newOrder.save(); 
  // order ko database me save kar rahe hain

  res.send("Order saved!"); 
  // client ko response bhej rahe hain
});

// ================== SERVER START ==================
app.listen(PORT, () => {
  console.log("App started!"); 
  // server successfully start hone ka message

  mongoose.connect(uri); 
  // MongoDB se connect kar rahe hain

  console.log("DB started!"); 
  // DB connection start hone ka message
});
