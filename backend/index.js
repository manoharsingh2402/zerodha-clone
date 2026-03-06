require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./models/HoldingsModel");

const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel"); 
const { WatchListModel } = require("./models/WatchListModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
}); 


app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    let stockInWatchList = await WatchListModel.findOne({ name: req.body.name }); 
    if(stockInWatchList){      
      const ltp= Number(stockInWatchList.price); 
      const dayChg = String(stockInWatchList.percent); 
      const curVal= ltp * Number(req.body.qty); 
      const average = Number(req.body.price); 
      const PL= curVal - average * Number(req.body.qty); 
      let netChng = PL/(average * Number(req.body.qty));   
      netChng = (netChng*100).toFixed(2) + "%"; 

      let newHolding = new HoldingsModel({
          name: req.body.name,
          qty: req.body.qty,
          avg: average.toFixed(2),
          price: ltp,
          net: netChng,
          day: dayChg, 
          isLoss: stockInWatchList.isDown,
        
      });
      await newHolding.save(); 
    }
    res.send("Order saved!"); 
  } 
  catch (err) {
    console.error(err);
    res.status(500).send("Error saving order");
  }
});

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});