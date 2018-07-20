var express = require('express');
var app = express.Router();
var push =require('./data');
var key=require('./key');

app.get('/',function(req,res){
  res.render('tarun');
})



app.get('/getapikey',function(req,res){
  
  res.render('apikey');
})

app.get('/getkey',function(req,res){
  
  
  var getkey=function()
  {
    var possiblestring='abcdefghijklmnopqrstuvwxyz'
    var str='';
    for(i=0;i<15;i++)
    {
      var randomstring=possiblestring.charAt(Math.floor(Math.random() * possiblestring.length));
      str+=randomstring;
    }
    return str;
  }
  key.getdata(function(err,docs){
    if(err)
    {
      console.log(err);
    }
    else
    {
      var keys=[];
      for(i=0;i<docs.length;i++)
      {
        keys[i]=docs[i].apikey;
      }
      var api=getkey();
      if(keys.indexOf(api)>-1)
      {
        getkey();
      }
      else
      {
        key.pushdata(api);
        res.render('getkey',{'key':api});
      }
    }
  })
  
})

app.get('/code',function(req,res){
  res.render('code');
})

app.get('/showdata',function(req,res){
  res.render('showdata');
})

app.post('/databykey',function(req,res){
  var api=req.body.api;
  console.log(api);
  push.getdata(api,function(err,data){
    if(err)
    {
      console.log(err);
    }
    else
    {
      var sample=[];
      for(i=0;i<data.length;i++){
        sample[i]=data[i].id
      }
      console.log(sample);
      res.render('data',{'data':sample});
    }
  })
  
})
module.exports = app;
