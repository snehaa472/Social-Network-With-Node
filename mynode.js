/*var ddd=require('fs');
var data=ddd.readFile('hello.txt',function(err,docs){
    console.log(docs.toString());
});
console.log("hi");*/

/*var cowsay = require("cowsay");

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));*/
var fs=require('fs');
var express=require('express');
var app=express();
app.get('/',function(req,res){
    var data= fs.readFileSync('hello.txt');
    console.log(data);
    res.send(data.toString());
    });


    app.get('/signupSubmit',function(req,res){
        var data= fs.readFileSync('hello.txt');
        console.log(data);
        res.send(data.toString());
        });

app.listen(5555,function(){
    console.log('server is on')
});





