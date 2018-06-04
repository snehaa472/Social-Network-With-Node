var express=require('express');

var Datastore=require('nedb');

var db = new Datastore({ filename: 'dbb', autoload: true });
var app=express();
app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/evodd.html');
})
app.get('/submitNumber',function(req,res){
    var numb=req.query.evenodd;
     var result=numb%2;

    if(result==0){
        res.send('Number is even');
    }else{
        res.send('Number is odd');
    }
})
app.listen(3000,function(){
    console.log("Server is listening");
})