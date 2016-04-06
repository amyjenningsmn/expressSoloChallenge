var express = require('express');
var app = express();
var path = require('path');
var port = 3000;
var balancefile = require("./modules/balance.js");
var randomfile = require("./modules/random.js");
var usdfile = require("./modules/usd.js");

app.use(express.static('public'));

app.get('/balance', function(req, res){
    var acct = balancefile.words();
    res.send(acct);
    console.log(acct);
    // Could also do function(req,res,next) if I have more app.gets I think?
});




app.listen(3000, function() {
  console.log('Listening for requests on port:', port);
});
