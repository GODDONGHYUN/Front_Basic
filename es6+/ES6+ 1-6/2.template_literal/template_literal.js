//    템플릿 리터럴 :
// * 일반 문자열하고 다르게 `(백틱)을 이용하여 문자열을 표현
// ? + 연산자를 사용하지 않고 인터폴레이션 ${} 형태로 표현식을 삽입

const king = {
  name: "이단",
  tombName: "태조",
};

const statement = `조선의 1대 왕 ${king.tombName}의 이름은 ${king.name}이다.`;
console.log(statement);