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

//Outer Environment Reference (외부 환경 참조)
//js엔진이 어떻게 outer를 이용해서 의사결정을 하는지?
//해당 값이 없을때 바깥 렉시컬 환경을 바라본다. 계속 올라가서 전역 실행컨텍스트 렉시컬 환경으로 갔을 때 없으면 Reference Error
//스코프 체인 - 식별자를 결정할 때 활용하는 스코프들의 연결리스트
let lamp = false;
function goTo2F() {
  let lamp = true;

  console.log(lamp); //? 식별자 결정 - 코드에서 변수나 함수의 값을 결정하는 것
}

goTo2F();

//실행컨텍스트
//코드를 실행하는 데 필요한 환경을 제공하는 객체
//환경 - 코드 실행에 영향을 주는 조건이나 상태
//더 빠르게 식별자를 결정할 수 있게 도와줌, 식별자 결정을 더 효율적으로 할 수 있게 해주는 수단
