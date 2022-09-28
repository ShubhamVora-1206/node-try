const http = require("http");
const port = 8080;
function reqHandler(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello World")
}

const server = http.createServer(reqHandler);
server.listen(port,function(){
    console.log("server is listening..");
});