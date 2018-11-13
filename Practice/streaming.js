// 크기가 큰 파일을 잘게 분해해서 여러번 전달하는 스트리밍 방식으로 비디오 파일 재생하기
// http://localhost/Practice/MoviePlayer.html 으로 실행
// 크롬에서 비디오가 소리만 나오는 경우는 비디오 자체 코덱 문제
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter11.html

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url);
    var resource = parsedUrl.pathname;

    // 경로를 루트 위치를 포함한 상대경로로 변환(으로 추정)
    var resourcePath = '.' + resource;
    console.log(resourcePath);

    // 처음 /Practice/MoviePlayer.html으로 요청을 보내 html 파일 읽기
    if (resource.indexOf('/Practice/') == 0) {
        fs.readFile(resourcePath, 'utf-8', function (error, data) {
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/html' });
                response.end('500 Internal Server ' + error);
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    }
    // MoviePlayer.html내 video 태그에서 /Resources/video.mp4를 호출하여 실행됨
    else if (resource.indexOf('/Resources/') == 0) {
        // 핵심 리드스트림
        var stream = fs.createReadStream(resourcePath);
        var count = 0;

        // 쪼개진 데이터가 전송 준비되면 실행
        stream.on('data', function (data) {
            count++;
            console.log('data count: ' + count);

            // 응답에 해당 데이터를 씀
            response.write(data);
        });

        // 스트림이 끝나면 종료 알림
        stream.on('end', function () {
            response.end();
        });

        // 예외처리
        stream.on('error', function (e) {
            console.log(e);
            response.end('500 Internal Server Error: ' + e);
        });
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('404 Page Not Found');
    }
});

server.listen(80, function () {
    console.log('Server is running...');
});