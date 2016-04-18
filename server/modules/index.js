var express = require("express");
var router = express.Router();
var path = require("path");
var db_query = require("../models/db_query.js");

router.get("/seriesnames", function(req, res) {
  db_query.find({}, "name link_name", function(err, data){
    if (err) {
      console.log("Error Retrieving Series Names from the Database", err);
    }
    res.send(data);
  });
});

router.get("/chapters/:id", function(req, res) {
  db_query.findOne({ link_name: req.params.id }, function(err, data){
    if (err) {
      console.log("Error Retrieving Chapter Names from the Database", err);
    }
    res.send(data);
  });
});

router.get("/*", function(req,res,next){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;
