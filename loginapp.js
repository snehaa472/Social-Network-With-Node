var fs=require("fs");
var express=require("express");

var app=express();
app.use(express.static('public'));
var mongojs=require('mongojs');
var db = mongojs('mongodb://sneha:abc123456@ds247830.mlab.com:47830/abc', ['users','user1'])
app.set('view engine', 'ejs');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/',function(req,res){
    // res.sendFile("C:/snehaAntz/mynode/signup.html");
    res.sendFile(__dirname+'/public/signup.html');
 });

app.get('/signupSubmit',function(req,res){
   var name=req.query.name;
   var email=req.query.email;
   var uname=req.query.uname;
   var password=req.query.password;
 

var docs = {
   Name:name,
   Email:email,
   Username:uname,
   password:password,

}
db.user1.insert(docs,function(err,data){
  // console.log('inserted successfully');
   res.sendFile(__dirname+"/public/login.html");
})


});

 app.get('/login',function(req,res){
    res.sendFile(__dirname+'/public/login.html');
});
app.get('/loginsubmit',function(req,res){
  var email=req.query.email;
  var password=req.query.password;

var docs={
  Email:email,
  password:password
}

db.user1.find(docs,function(err,data){

  if(data.length>0){

    db.user1.find({}, function(err,newdocs){
        console.log(newdocs);
        res.render('welcome',{result:newdocs});

    })

  }else{
      res.send("Sorry..Check Username or password");
  }
})
})
  app.get('/profile/:name',function(req,res){
    var name=req.params.name;
     db.users1.find({Name:name},function(err,data){
    if(data.length>0){
      console.log(data);
    res.render('index',{result:data});
      }
      })
    })
  
//res.send(data);
// res.send("Firstname:"+fname+" "+"Lastname:"+lname+"Age: "+ age +" Gender:"+ gender + "Phone number: "+ phone + "Email: "+ email + "Address: "+ address + "Hobby: " + hobby );


app.listen(3000,function(){
    console.log("Server is listening");
});

/*app.get('/', function(req, res){
    var dog={ 
        'breed':['pug','Bull dog','poodle','German sheperd'],
        'legs':4,
     'tail':1,
       'color':{
           colo1:'brown',
           colo2:'red',
           colo3:'black'}

   }
    res.render('index',{result:dog});

  });*/