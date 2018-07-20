var mongo=require('mongodb');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/postesp');
var db=mongoose.connection;


var schema1=mongoose.Schema;
 
var constructor1=new schema1({
    apikey:{
        type:String
    }
},{collection:'key'});
var data1=mongoose.model('data1',constructor1);



var key={};

key.getdata=function(cb){
    
    data1.find(cb);

}
key.pushdata=function(api){
    var item={
        apikey:api
    }
    var insert= new data1(item);
    insert.save();
}

module.exports=key;