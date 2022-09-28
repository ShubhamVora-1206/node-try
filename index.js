const http = require("http");
const port = process.env.PORT || 80;
function reqHandler(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Kundi Laga lo saiyaaaa, Tumharko Jannat dikhati..")
}

const server = http.createServer(reqHandler);
server.listen(port,function(){
    console.log("server is listening..");
});