const obj = {
    data1 : "d1",
    data2: 10,
    data3: [1,2,3,4],
};

const obj2 = {
    ...obj,
    data2: 20,
};

/**
 * 비구조 할당(구조분해)
 * 
 * 
 */
//const data1 = obj.data1;
//const data2 = obj.data2;

const {data1:d1, data2:d2} = obj;// 위 두개의 코드와 같다
console.log(d1,d2);

const nums = [1,2,3,4,5];
const [n1,n2,n3] = nums;

console.log(n1,n2,n3); //1 2 3

const { data1: dd1, ...obj3} = obj;
console.log(obj3); //{ data2: 10, data3: [ 1, 2, 3, 4 ] }
console.log(dd1);

const [ n4, n5,n6, ...newNums] = nums;
console.log(newNums); //[ 4, 5 ]
