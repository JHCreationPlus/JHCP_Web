// 클라이언트가 요청한 url 주소 분석하기
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter8.html



var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
    console.log(request.url);

    var parsedUrl = url.parse(request.url);
    var resource = parsedUrl.pathname;
    
    console.log('resource path = %s', resource);

    if(resource == '/address'){
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end('서울특별시 강남구 논현1동 111');
      }else if(resource == '/phone'){
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end('02-3545-1237');
      }else if(resource == '/name'){
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end('Hong Gil Dong');
      }else{
        response.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
        response.end('404 Page Not Found');
      }

      
});

// 포트번호의 디폴트값이 80이므로 포트를 80으로 설정하면 별다른 포트설정의 필요가 없어짐
// http://localhost/로 접속
server.listen(80, function(){
    console.log('Server is running...');
});