var express =  require('express');
var app= express();
var student= require('./student')


app.get('/home', (Request, response)=>{
/*  response.write("wel-come home")
 response.write(student[0].sname); */
 response.json(student)
 response.end()
}).listen(5050,()=>{console.log("server running");})

app.get('/new',(Request, response)=>{

response.send("about me");


}
)

app.get('/two' ,(Request, response)=>{
    response.sendFile(__dirname+'/test.html');

}).listen(3030,()=>{console.log("server running");})


app.post('/two',( Request,response)=>{
    response.send("details captuerd");
})