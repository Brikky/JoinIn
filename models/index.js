var mongoose = require("mongoose");
console.log("CONNECTING", process.env.MONGODB_URI);
mongoose.connect( process.env.MONGODB_URI || "mongodb://127.0.0.1/JoinIn" );
console.log("CONNECTED");
var City = require('./city');
var Blurb = require('./blurb');

module.exports.City = City;
module.exports.Blurb = Blurb;
