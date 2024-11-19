//모든function에는 this가 존재함
//함수가 호출 될 때마다 this가 동적으로 결정되는것을 그 객체에 this가 바인딩된다고 표현
//Object.function() -> this 바인딩
//단독으로 호출 될 때는 전역

//기본바인딩 - 기본적으로 전역객체(window 객체)에 바인딩 됨 (use strict 를 사용할경우 undefined)

//암시적 바인딩
const obj = {
  name: "soyoung",
  getName() {
    return this.name;
  },
};

console.log(obj.getName()); //soyoung

function showReturnValue(callback) { //함수의 참조값만! 전달
  console.log(callback()); //함수 단독 실행
}
showReturnValue(obj.getName); //undefined
//참조타입(Reference Type) 


//명시적 바인딩! call, apply, bind
func.call(context, arg1,arg2)
func.apply(context, arg)

func.bind(context,arg1,arg2,'...')

//New 바인딩
//새로운 객체 생성, 함수 코드 실행, 새로 생성한 객체 반환
{
    obj = {
    }
    this = obj //bind
    this.name = 'soyoung'
    return this
}
// new > 명시적 > 암시적 > 기본

//This in Arrow Function 화살표함수, 상위 실행문맥을 유지. 선언될 당시의 상위스코프의 this 바인딩 컴포넌트를 참조

const obj2 = {
    name: 'soyoung',
    showNameInSec(sec){
        setTimeout(()=>{
            console.log(this.name)
        },sec)
    }
};

//어휘적 렉시컬 this
obj2.showNameInSec(1000)