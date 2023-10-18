const express = require('express');

const app =express();
const port=3000;

app.use(express.json());
app.use(express.urlencoded());

app.get("/eka",function(request,response){
    console.log("kutsutaan endpointtia eka");
    response.send("endpoint eka");
});

app.get("/toka/:fname",function(request,response){
    response.send("Terve "+request.params.fname);
});

app.get("/kolmas/:fname?",function(request,response){
    if(request.params.fname)
        response.send("Terve "+request.params.fname);
    else
        response.send("Terve tuntematon");
});

app.post("/eka",function(request,response){
    response.send(request.body);
    console.log(request.body.fname);
});

app.listen(port,function(){
    console.log("kuuntelen porttia 3000");
});

module.exports=app;
