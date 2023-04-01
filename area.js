const http=require('http');
url=require('url');
http.createServer((req,res)=>{
    console.log(req.url);
    var u=url.parse(req.url,true).query;
    console.log(u);
    console.log(u.k);
    var r=Number(u.k);
    var area=(3.14)*r*r;
    res.write("Area of circle:"+area);
    res.end();
}).listen(8080);
console.log("server is running");