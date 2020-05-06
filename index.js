var http =require('http');
var dt=require('./datemodule');
var fs=require('fs');

http.createServer(function(req ,res){
    fs.readFile('index.html',function (err,data) {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
        
    });
    fs.appendFile('myname.txt','Hello content is collins kiplagat', function(err){
        if(err) throw err;
        console.log('Saved!');
    });
    fs.writeFile('myname.txt','Coki',function(err) {
        if(err) throw err;
        console.log("saved!")
        
    })
}).listen(8081);