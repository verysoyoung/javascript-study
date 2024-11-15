//hoisting 선언문이 마치 최상단으로 끌어올려진 듯한 현상
//생성단계(Creation Phase) - 스캔하고 준비하는 단계
//실행단계(Execution Phase) - 선언문의 나머지코드 실행

console.log(TVChannel); //undefined JS엔진이 값을 초기화 해줌

var TVChannel = "Netflix";

console.log(TVChannel);

console.log(name); //Reference Error
//선언라인 이전에 식별자를 참조할 수 없는 구역 - 일시적사각지대(Temporal Dead Zone)

const name = "soyoung";

console.log(name);
