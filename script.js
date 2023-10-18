const http=require('http');

const server=http.createServer((req,res)=>{
    res.write("hello yash");
    res.end();
})

server.listen(3000);