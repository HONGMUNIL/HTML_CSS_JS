/**
 * 배열
 * 
 * 
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers); // [1,2,3,4,5,6,7,8,9] 배열출력


for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("--------------------------------");

for (let num of numbers) { //자바의 향상된for문 :과 자바스크립트의 of와 같다
    console.log(num);
}

console.log("--------------------------------");

numbers.forEach((num) => console.log(num));

numbers.push(10); //값 삽입
console.log(numbers);
console.log(numbers.pop()); //10 pop은 값을 꺼내오는것 꺼내오면 10은 배열에서 제거(제일위의값)
console.log(numbers.includes(5)); //값을 포함하고있는지 확인(java- contains)
console.log(numbers.indexOf(5)); //값의 위치
console.log(numbers.lastIndexOf(5)); //뒤에서부터 값의 위치
console.log(numbers.concat([11, 12, 13, 14, 15])); //두 배열의 병합
console.log(numbers);
const newNumbers = numbers.concat([11, 12, 13, 14, 15]);
console.log(newNumbers);
const newNumbers2 = [...numbers, 11, 12, 13, 14, 15]; //...은 스프레드연산 위에 concat과 동일
console.log(newNumbers2);
const newNumbers3 = numbers.slice(0, 5);
console.log(newNumbers3); //[ 1, 2, 3, 4, 5 ]
