var http=require("http")
console.log("module ok")
http.createServer((req,res)=>{
    res.end("welcome to http server")
}).listen(9888)
console.log("port listening..9888")