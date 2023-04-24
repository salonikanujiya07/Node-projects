var http = require('http');




http.createServer(function(req ,res ){

    res.write("hey i am in http server")
    res.end();
}).listen(4001,()=>{console.log("server runing in http");})