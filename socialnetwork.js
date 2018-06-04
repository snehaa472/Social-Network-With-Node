var fs=require('fs');
var express=require('express');
var app=express();

app.use(express.static('public'));
 var Datasource=require('nedb');
 var db=new Datasource({filename:'mydb', autoload:true});
 app.set('view engine','ejs');

 app.get('/',function(req,res){
     res.sendFile(__dirname+'/public/signup1.html');
     
 });
 app.get('/signsubmit',function(req,res){
     var docs={
         firstname:req.query.fname,
         lastname:req.query.lname,
         age:req.query.age,
         email:req.query.email,
         password:req.query.password
     }
     db.insert(docs,function(err,data){
         res.sendFile(__dirname+'/public/login1.html')
     })
 })
 app.get('/login',function(req,res){
     res.sendFile(__dirname+'/public/login1.html');

 })

 
 app.get('/profiles/:name',function(req,res){
  var data = req.params.name;

res.send(data)

})

 app.get('/loginsubmit',function(req,res){
     var datas={
         email:req.query.email,
         password:req.query.password
     }
    db.find(datas,function(err,doc){
        if(doc.length>0){
        db.find({},function(err,a){
            console.log(a);
            res.render('myapp',{result:a});
        })

        }

    })
     })
    

 
 app.listen(3000,function(){
     console.log('Server is listening');
 })

