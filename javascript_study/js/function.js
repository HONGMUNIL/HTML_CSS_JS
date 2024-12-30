


function fx2(num1,num2){
    console.log(num1 + num2);
}
fx2(); //Nan: 타입이 잘못되었다
fx2(10,20); //오버로딩은 안된다 불가능

function fx2(num1,num2=0, num3=0){
    console.log(num1 + num2 + num3);
}

fx2(1,2); 


function fx2(num1,num2=0, num3=0){
    console.log(num1 + (num2 ?? 0) + num3);//NaN
}

fx2(4,5)

const num1 = 20;
function fx3(){
    return num1;
}

console.log(fx3());



function fx4(){
    console.log("fx4 호출");
    function fx5(){
        console.log("fx5호출");
    }
    fx5();
}

const fx6 = fx4;

fx6();


function fx7(){
    console.log("fx7호출");
}
function fx8(){
    console.log("fx8호출");
}
function fx10(){
    console.log("fx10호출");
}
function fx11(){
    console.log("fx11호출");
}
function fx12(){
    console.log("fx12호출");
}
function fx13(){
    console.log("fx13호출");
}

const fxArray= [fx11, fx12, fx13];
console.log(fxArray);
for(let fx of fxArray){
    fx();
}



//callback 함수
function add(n1, n2){
    return n1+ n2;
}

function sub(n1, n2){
    return n1 - n2;
}
function run(fx){
    const result = fx(10,20);
    console.log(result);
}

run(add);
run(sub);

/**
 * 화살표 함수
 */

function fx(arg1, arg2){
    return "리턴";
}
fx(1,2);


const arrowFx = (arg1, arg2) => {
    return "리턴";
}
fx(3,4);


const arrowFx2 = arg1 => arg1 + 1; 
arrowFx2(10);


function run2(fx) {
    fx();
}
run2(()=>console.log("test"));


