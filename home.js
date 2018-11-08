// 직접 만든 모듈 호출
var moduleSum = require('./Module/sum');

// 모듈 내 기능들을 객체처럼 접근
// C언어의 printf 함수와 동일한 방식으로 출력
console.log('sum = %d', moduleSum.sum(100));
console.log('var1 = %s', moduleSum.var1);

// 커스텀 이벤트 예제
var moduleTimer = require('./Module/timerEvent');

// timer 모듈이 객체로 생성되는 순간 모듈 내 setInterval 함수가 지속적으로 실행되고 있다.
// 이를 감지하는 on 함수를 만들어 1초마다 현재시간 출력
moduleTimer.timer.on('tick', function(time){
    var time = new Date();
    console.log('현재시간: ' + time);
});