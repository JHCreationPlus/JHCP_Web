// 비동기식 처리 방식의 핵심인 이벤트를 직접 만들어보는 예제.
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter7.html

// 이벤트 처리를 위한 기본 요소
// 1. EventEmitter: 노드JS의 모든 이벤트가 정의된 기본 객체.
// 2. on(): 특정 이벤트를 감지하는 함수.
// 3. emit(): 특정 이벤트를 발생시키는 함수.

// 1초마다 'tick' 이벤트를 발생시키는 예제
// home.js에서 호출하여 사용함
var EventEmitter = require('events');

var sec = 1;
exports.timer = new EventEmitter();

// sec값으로 설정한 1초마다 tick 이벤트를 지속적으로 발생시킴
setInterval(function(){
    exports.timer.emit('tick');
}, sec*1000);