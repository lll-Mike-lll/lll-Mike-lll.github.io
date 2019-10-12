
const express = require("express");
const app = express();

app.get("/",function(request,response){
  console.log(request);
  response.send("mike");
});
app.get("/contact",function(req,res){
  res.send("wuttinun.ru@gmail.com");
});
app.get("/about",function(req,res){
  res.send("wuttinun is an engineer");
});
app.get("/about2",function(req,res){
  res.send("wuttinun is an engineer xxx");
});
app.listen(3000, function(){
  console.log("server");
});
