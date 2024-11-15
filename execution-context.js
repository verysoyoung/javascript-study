//hoisting 선언문이 마치 최상단으로 끌어올려진 듯한 현상
//생성단계(Creation Phase) - 스캔하고 준비하는 단계
//실행단계(Execution Phase) - 선언문의 나머지코드 실행

console.log(TVChannel); //undefined JS엔진이 값을 초기화 해줌

var TVChannel = "Netflix";
//선언과 초기화가 동시에 일어남
//선언 - 메모리공간을 확보하고 식별자와 연결
//초기화 - 식별자에 암묵적으로 undefined 값 바인딩

console.log(TVChannel);

console.log(name); //Reference Error
//선언라인 이전에 식별자를 참조할 수 없는 구역 - 일시적사각지대(Temporal Dead Zone)

const name = "soyoung";
//선언라인 전에는 변수를 참조할 수 없음
console.log(name);

//함수 호이스팅

//1. 함수 표현식 = 변수 호이스팅과 동일하게 동작
study(); //undefined로 초기화를 하여 undefined를 호출하려 했기 때문에 type error
var study = () => {};
running(); //Reference Error 환경레코드 초기화X
const running = () => {};

//2. 함수 선언식

eat(); //선언과 동시에 함수가 생성되어 선언 전에도 함수를 호출할 수 있음
function eat() {}
