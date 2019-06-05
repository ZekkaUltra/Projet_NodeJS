var http = require('http');
var url = require("url");
var querystring = require('querystring');

var server = http.createServer(function(req, res){
        
        var page = url.parse(req.url).pathname;
        
        res.writeHead(200, {"Content-Type": "text/plain"});
        
        var params = querystring.parse(url.parse(req.url).query);
        
        if ('name' in params && 'lastname' in params){
            res.write(params.name + ' ' + params.lastname);
        }

        res.end();
});

server.listen(3000);
console.log("Yeah baby,my server is working");