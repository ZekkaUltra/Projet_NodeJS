
var http = require('http');
var url = require("url");


var server = http.createServer(function(req, res){
		var page = url.parse(req.url).pathname;
		console.log(page);
    	res.writeHead(200, {"Content-Type": "text/plain"});
    	if (page == "/"){
    		res.write("Tip top, ça démarre !");
    	}
    	else if(page == "/url1"){
    		res.write("Première URL");
    	}
    	else if(page == "/url2"){
    		res.write("Deuxième URL");
    	}
    	else{
    		res.write("Cette page n'existe pas");
    	}
    	res.end();
});

server.listen(3000);
console.log("Yeah baby,my server is working");