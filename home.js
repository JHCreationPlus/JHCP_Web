// 직접 만든 모듈 호출
var module = require('./Module/sum');

// 모듈 내 기능들을 객체처럼 접근
// C언어의 printf 함수와 동일한 방식으로 출력
console.log('sum = %d', module.sum(100));
console.log('var1 = %s', module.var1);