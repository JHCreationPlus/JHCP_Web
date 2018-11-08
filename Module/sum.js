// 노드JS에서 require()로 불러 쓰는 모듈을 직접 만들어보기
// home.js에서 이를 호출
// https://javafa.gitbooks.io/nodejs_server_basic/content/chapter6.html

// exports: 모듈의 기능을 정의하는 함수.
// 이 모듈을 호출하는 곳에서 require()로 객체로 만들면 (객체명).(기능명)으로 접근 가능

exports.sum = function(max){
    // 1부터 입력한 값까지의 합을 구하는 함수
    return (max+1)*max/2;
}

exports.var1 = 'NEW VALUE 100';