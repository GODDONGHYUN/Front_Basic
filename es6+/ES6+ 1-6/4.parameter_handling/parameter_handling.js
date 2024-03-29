// 매개변수 기본값 :
// * 함수 호출시 인수를 전달하지 않았으면 사용할 기본 값을 지정 할 수 있음

const add = (a = 10, b = 10) => {
  return a + b;
};

console.log(add()); //  ! 인수를 전달 하지 않은 상태에서 호출하면 undefined + undefined 형태라 NaN 출력
console.log(add(30, 90));

console.log("========================================");

/*
  rest 매개변수 : 
  - 
  - 
  - 
*/

console.log("========================================");

/*
  spread 연산자 : 
  - 
  - 
*/

console.log("========================================");
