// 파일 입출력을 이용하여 자바스크립트에서 html 페이지 불러오기
// http://localhost/home 으로 호출
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter9.html

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {

    var parsedUrl = url.parse(request.url);
    var resource = parsedUrl.pathname;

    // resource = pathname = 사이트 도메인 뒤에 붙는 url 경로
    if (resource == '/home') {
        // 프로젝트 폴더 최상단의 Home.html 파일을 읽어 콜백함수의 data 인자로 전달하여 처리
        fs.readFile('Home.html', 'utf-8', function (error, data) {
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                response.end('500 Internal Server Error: ' + error);
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                response.end(data);
            }
        });
    } else {
        response.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end('404 Page Not Found');
    }
});

server.listen(80, function () {
    console.log('Server is running...');
});