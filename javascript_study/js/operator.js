/**
 * 연산자
 * 
 * 산술연산자
 * +, -, *, /, %
 * 
 * 
 */

console.log(5**2); //25


/**
 * 증감연산자
 * ++, --
 * 
 * 비교연산자
 * <, <=, >, >=, ==, !=, ===, !==
 * javascript의 특징은 기본적으로 변수의 타입이 정해지지 않는다
 * 
 * 
 */

console.log(1==1); //true
console.log(1=="1"); //true  타입검사 X, 타입이 달라도 ""안에잇는값이 같으면 true반환
console.log(1!="1"); //false  타입검사 X, 
console.log(1==="1"); //false 타입검사 O
console.log(1 !== "2"); //true 타입검사 O




/**
 * 논리 연산자
 * &&, ||
 * 단축 평가
 * 
 * 논리 자료값 || anything
 * 논리 자료값 === true => true
 * 논리 자료값 === false => anything
 * 논리 자료값 && anything
 * 논리 자료값 === true => anything
 * 논리 자료값 === false => false
 */



console.log(1 === 1 || "홍문일");//true
console.log(1 !== 1 || "홍문일");//홍문일
console.log(1 === 1 && "홍문일");//홍문일
console.log(1 !== 1 && "홍문일");//false

/**
 * Not 연산
 * !, !!
 * 값이 비어있거나 없으면 false
 */

console.log("----------Not연산-------------")
console.log(!"") //true 비어있는 문자열은 false로 본다
console.log(!0)  //true 
console.log(!null)  //true 
console.log(!undefined)  //true 

console.log(![1,2,3,4])  //false 
console.log(![])  //false  배열은 내부에 값이 없더라도 배열의 주소는 존재하기 떄문제 true
console.log(typeof []); //object
console.log(![].length); //true

var name = "홍문일";
if(!name){
    console.log("이름이 비었습니다.")
}
if(!!name){
    console.log("이름이 비어있지 않습니다.")
}

/**
 * null 병합 연산
 * anything ?? anything2
 * 좌항(anything) === null || 좌항(anything) === undefined=>우항(anything2)
 * 좌항(anything) !== null && 좌항(anything) !== undefined=>좌항(anything1)
 * 
 */

console.log(null ?? "홍문일"); //홍문일
console.log("홍문일" ?? "홍문이");//홍문일

console.log(!0);

