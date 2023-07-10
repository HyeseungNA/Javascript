//1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 =  ${1+2}` )

//2. Numeric operators
// add, substact, divide, multiply, remainder, exponentiation


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
const neIncrement = counter++;

//4. Assignment operator

//5. Comparison operators

//6. Logical operators: || (or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// 7. Equality
// == loose equality, with type conversion
// === strict equality, no type conversion

const ellie1 = {name: 'ellie'}
const ellie2 = {name: 'ellie'}
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

//ex)
console.log(0 == false); // true
console.log(0 === false); // false
console.log(''== false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false



// conditional operators
const name = 'ellie';
if (name === 'ellie') {
    console.log('welcome,Ellie');
}else if (name === 'coder') {
    console.log('You are amazing coder');
}else {
    console.log('unknown');
}

// Loops
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`)
    i--;
}

do {
    console.log(`do while : ${i}`)
    i --;
} while (i > 0);

for (i= 3 ; i> 0; i--){
    console.log(`for:${i}`)
}
for (let i = 0; i < 11; i++){
    if (i % 2 === 0) {
        continue
    }
    console.log(`${i}`)
}

