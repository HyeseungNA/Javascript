'use strict'

// 2. variable

let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName)
}
console.log(globalName)

// var(don't ever use this!)
// var hoisting
// 호이스팅이란? 어디에 선언했든 상관없이 맨 위로 끌어올리는것을 의미한다!
// var has no block scope


// Constants
// 변경이 불가능함
// 보안에 좋음, 다양한 스레드가 동시에 변경하는 것을 막아줌, 인간의 실수를 막아줌

const daysInWeek = 7;

// Variable types

//1. number

let a = 12;
let b = 1.2;

//2. string
const char = 'c';
const greeting = 'hello' + c

//3. boolean
// false : 0,null,undefined,NaN,
// true: any other value

// null
// undefined

// symbol , create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');

console.log(gSymbol1 === gSymbol2); // true

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text} , type: ${typeof text}`)
text = 1;