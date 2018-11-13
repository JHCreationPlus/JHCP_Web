'use strict';

// require() 함수를 통해 내장된 모듈 호출해보기

// os: 운영체제 관련 모듈
var os = require('os');
console.log(os.arch);

// url: 인터넷 url 관련 모듈
var url = require('url');
var v = url.parse('https://github.com/JHCreationPlus/JHCP_Web');
console.log(v);

// fs: 파일 입출력 모듈
var fs = require('fs');

// 비동기 방식 파일 쓰기
// fs.writeFile(파일 경로, 파일 내용, 쓰기 옵션, 콜백 함수(에러 변수){ ... }) 형식
fs.writeFile('Resources/ASYNC File.txt', '비동기 파일', 'utf8', function(error){
    if(error) console.log('쓰기 오류 발생!');
    else console.log('파일 쓰기 성공!');
})

// 비동기 파일 읽기
// fs.readFile('파일 경로', 읽기 옵션, 콜백 함수(에러 변수, 파일 내용){ ... }) 형식
fs.readFile('Resources/ASYNC File.txt', 'utf8', function(error, data){
    if(error) console.log('읽기 오류 발생!');
    else console.log('파일 내용: ' + data);
})