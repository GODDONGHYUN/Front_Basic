// 매개변수 기본값 :
// * 함수 호출시 인수를 전달하지 않았으면 사용할 기본 값을 지정 할 수 있음

const add = (a = 10, b = 10) => {
  return a + b;
};

console.log(add()); //  ! 인수를 전달 하지 않은 상태에서 호출하면 undefined + undefined 형태라 NaN 출력
console.log(add(30, 90));

console.log("========================================");

//  rest 매개변수 :
// * 매개변수 앞에 ...을 붙여서 정의한 매개변수
// * 함수에 전달받은 인수의 목록을 배열로 전달 받음
// * rest 매개변수는 반드시 제일 마지막에 선언되어야함
const restFunction1 = (...args) => {
  console.log(args);
};
restFunction1(1, 2, 3, 4, 5);

const restFunction2 = (arg1, ...args) => {
  console.log(arg1);
  console.log(args);
};
restFunction2(1, 2, 3, 4, 5);

console.log("========================================");

// spread 연산자 :
// * ...을 사용하여 대상을 개별 요소로 분리
// * 반드시 피연산자는 반복 가능한 객체 (배열, 객체, 문자열 등 ..) 여야함

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//  아래와 동일
console.log(...numbers);
console.log(1, 2, 3, 4, 5);
console.log("========================================");

// * 배열 복사에 사용
// ? 요소만 따로 뽑아와서 copyNumbers라는 배열을 새로 생성한거기 때문에 서로 주소가 달라서 값이 다르다.
const copyNumbers = [...numbers];
console.log(copyNumbers);

copyNumbers[0] = 10;
console.log(numbers);
console.log(copyNumbers);

console.log("========================================");

// * 배열 연결에 사용

const numbers2 = [6, 7, 8, 9, 10];
let newNumbers = [...numbers, ...numbers2];
// console.log(newNumbers);

newNumbers = [...numbers2, ...numbers];
console.log(newNumbers);

console.log("========================================");

// 배열 요소 추가에 사용
newNumbers = [...numbers, 0, -1, -2];
console.log(newNumbers);

console.log("========================================");

// 객체 복사, 연결, 요소 추가에 사용
const king = {
  name: "이성계",
  tombName: "태조",
};

// * 복사
let newKing = { ...king };
console.log(newKing);

newKing.name = "이방과";
console.log(newKing);
console.log(king);

// * 연결
const kingInfo = {
  address: "서울 특별시",
  country: "고려",
};

newKing = { ...king, ...kingInfo };
console.log(newKing);

// * 요소 추가
newKing = { ...king, birth: "1335.11,04" };
console.log(newKing);

// * 동일한 키에 값이 이미 존재하는 요소를 추가 해버리면 그 값을 덮어 씌움 (수정과 동시에 요소를 추가할 때 사용)
newKing = { ...king, name: "이단", birth: "1335.11.04" };
console.log(newKing);
