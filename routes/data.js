var mongo=require('mongodb');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/postesp');
var db=mongoose.connection;


var schema=mongoose.Schema;
 
var constructor=new schema({
    id:{
        type:Number
    },
    apikey:{
        type:String
    }
},{collection:'api'});
var data=mongoose.model('data',constructor);



var push={};

push.getdata=function(apikey,cb){
    var query={apikey:apikey};
    data.find(query,cb);

}

module.exports=push;