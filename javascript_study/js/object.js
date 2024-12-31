/**
 * 객체
 * 
 * 
 */

const obj ={
    name: "홍문일",
    age: 29,
    print: ()=> console.log(`이름: ${obj.name}, 나이:${obj.age}`),
}

obj.print(); //이름: 홍문일, 나이:29

const obj2 = {
    name: "홍문일",
    age: 29,
    print: ()=> console.log(`이름: ${obj.name}, 나이:${obj.age}`),
}

console.log(obj ===obj2); //false 주소가다르다!!
console.log(JSON.stringify(obj) === JSON.stringify(obj2)); //true 문자열이 같은가
console.log(typeof JSON.stringify(obj));


/**
 * object -> JSON JSON.stringfy(object)
 * 
 * JSON을 다시 object로 변환하려면
 * JSON -> JSON.parse(json문자열)
 * 
 * User객체 생성
 * username, password, name, email
 * 
 * 
 */
const obj3 ={
    username: "",
    password: "",
    name: "",
    email: "",
    hobby: ["축구", "농구", "배구"],
    printObjInfo: ()=>console.log("사용자 정보 출력"),
}


obj3.email="bear4564"
obj3.name="홍문일"
obj3.password=123;
obj3.username="Moon"

const objJSON = JSON.stringify(obj3);//함수가 사라진다 JSON형태로 바꾸는것
console.log(obj3);
console.log(objJSON);
const convertObj = JSON.parse(objJSON); //JSON형태를 다시 문자열로!
console.log(convertObj.email);
console.log(convertObj);



const student = {
    name: "홍문일",
    age: 29,
    address: "부산 진구",
    
}

const key = "age";
const value = 32;

const student2 = {
    ...student,
    [key]: value,
}


console.log(student2);