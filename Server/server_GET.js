// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter4.html

// 노드 JS를 돌릴 기본적인 서버
// IDE에서 디버그하거나 cmd에서 이 파일을 node 명령어로 실행하면 서버가 돌아감
// C:\Workspace\javascript\JHCP_Web\Server> node server

var http = require('http');
var url = require('url');

// url에 ?(...)의 형태로 값을 보내는 요청인 GET 방식을 사용하기 위한 쿼리스트링 모듈
var querystring = require('querystring');

var server = http.createServer(function(request, response){

    console.log('------- start log-------');

    // 클라이언트에서 요청한 url을 parse(분석)하여 request 객체로 정리하여 변수에 담아 보냄
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl); // request 객체값이 표시됨

    // GET 방식으로 url에 담아 보낸 변수들을 분석하여 객체에 담아 보냄
    // 2, 3번째 인자로 들어간 문자를 기준으로 변수를 구분
    // url에는 http://localhost:8080/?(변수1)=(값1)&(변수2)=(값2) ~ 형태로 입력
    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
    console.log(parsedQuery);

    console.log('------- end log -------')

    // 제대로 응답이 전해졌을 때(http 상태코드가 200일 때) 텍스트 html 형태로 문자열을 출력함
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    response.end('첫번째 변수: ' + parsedQuery.var1);
});

// 브라우저에서 http://localhost:8080/으로 접속하면 이 리스너와 createServer의 콜백 함수가 실행됨
server.listen(8080, function(){
    console.log('서버가 돌아가는 중...');
})