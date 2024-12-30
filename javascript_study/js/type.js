


var name = "김준일";
console.log(name);
console.log(typeof name);
var age = 31;
console.log(age);
console.log(typeof age);
var address;
console.log(address);// undefined 
console.log(typeof address);// undefined 

address =10;
console.log(address); //10 
console.log(typeof address); //number 대입이 이루어지는순간 타입이 정해진다

address += "10";
console.log(address); //대입이되는순간마다 타입이 변한다
console.log(typeof address);

address = null; //null은 객체를 표현할때 사용
console.log(address); 
console.log(typeof address); //object 

address = { //객체 사용법-> 변수명 = {구현부}
    si:"부산시",
    gungu: "부산진구",
};
console.log(address); //{ si: '부산시', gungu: '부산진구' }
console.log(typeof address); //object


/**
 * number(숫자 - 정수, 실수)
 * string(문자열)
 * boolean(논리 - 참, 거짓)
 * object(객체)- null도포함
 * undefined(type이 없다 )
 * NaN(Not a Number)
 */

