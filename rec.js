
const http=require('http');
url=require('url');
http.createServer((req,res)=>{
    console.log(req.url);
    var u=url.parse(req.url,true).query;
    console.log(u);
    console.log(u.k);
    console.log(u.r);
    var l=Number(u.k);
    var b=Number(u.r);
    var area=l*b;
    res.write("Area of rectangle:"+area);
    res.end();
}).listen(8000);
