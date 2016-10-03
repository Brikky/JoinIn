var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://127.0.0.1/JoinIn" );
var City = require('./city');
var Blurb = require('./blurb');

module.exports.City = City;
module.exports.Blurb = Blurb;
