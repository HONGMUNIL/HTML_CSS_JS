var a = 10;
console.log(a);
var a = 20; 
console.log(a);

console.log(b);//undefined (호이스팅이라고도한다)
var b = 30; 
console.log(b);
/**
 * 호이스팅
 * 선언과 정의가 먼저 실행되는 현상
 * var는 재선언이되서 js창시자가 인정한 실수라한다
 */

let c = "c data"; //일반 변수
console.log(c); //c data
c= "c2 data";
console.log(c);//c2 data
const d = "d data"; //상수
console.log(d); //d data

