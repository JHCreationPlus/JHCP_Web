// POST 방식으로 데이터를 보내는 노드 JS 서버 처리
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter5.html

var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(request, response){
    var postdata = '';

    request.on('data', function(data){
        postdata = postdata + data;
    });

    request.on('end', function(){
        var parsedQuery = querystring.parse(postdata);
        console.log(postdata);

        // POST 방식으로 var1이라는 이름의 변수를 보내야 출력 가능
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end('첫번째 값: ' + parsedQuery.var1);
    });
});

server.listen(8080, function(){
    console.log('서버 동작 중...');
})