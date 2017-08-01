passWord = ""

const request = require("request");
const tmi = require('tmi.js');
const fs = require('fs')

var channelname = "jarmahent"
var timeoutInMilliSeconds = 10*1000;
var fwd = "http://192.168.0.16/socket1Fwd"
var bkwd = "http://192.168.0.16/socket1Bkwd"
var lft = "http://192.168.0.16/socket1Lft"
var rgt = "http://192.168.0.16/socket1Rgt"
var strt = "http://192.168.0.16/socket1Strt"

var options = {
  options:{
    debug: true
  },
  connection:{
    cluster: "aws",
    reconnect: true
  },
  identity:{
    username: "emotianalyzer",
    password: passWord
  },
  channels: [channelname]
};

var opts = {
  url: fwd,
  timeout: timeoutInMilliSeconds
}

var o::
}

var opts3 = {
  url: rgt,
  timeout: timeoutInMilliSeconds
}

var opts4 = {
  url: strt,
  timeout: timeoutInMilliSeconds
}


var client = new tmi.client(options);
client.connect();
client.on('chat', function(channel, userstate, message, self){
  if(message === "FORWARD"){
    request(opts, function(err, res, body){
      if(err){
        console.dir(err);
      }
      var statusCode = res.statusCode;
      console.log('status code: ' + statusCode);
    });
  }

  if(message === "BACKWARDS"){
    request(opts1, function(err, res, body){
      if(err){
        console.dir(err);
      }
      var statusCode = res.statusCode;
      console.log('status code: ' + statusCode);
    });
  }

  if(message === "LEFT"){
    request(opts2, function(err, res, body){
      if(err){
        console.dir(err);
      }
      var statusCode = res.statusCode;
      console.log('status code: ' + statusCode);
    });
  }

  if(message === "RIGHT"){
    request(opts3, function(err, res, body){
      if(err){
        console.dir(err);
      }
      var statusCode = res.statusCode;
      console.log('status code: ' + statusCode);
    });
  }

  if(message === "STRAIGHT"){
    request(opts4, function(err, res, body){
      if(err){
        console.dir(err);
      }
      var statusCode = res.statusCode;
      console.log('status code: ' + statusCode);
    });
  }


});
