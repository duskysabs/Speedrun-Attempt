/*
Part 1 -- SCOPE
*/

let x = 10;

function test(){
    let x = 20;
    console.log(x); //output = 20
}

test();

console.log(x) // output = 10

/* BLOCK SCOPE */
// let and const also obey block scope
if(true){
    const message = "Hello"
}
console.log(message); // This throws an error because message only exists inside:
// {
//   ...
// }

// same with loops
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // error

/*
Part 2 — Functions can access outer variable
*/

const name = "Dusky";

const greet = () => {
  console.log(name);
};

greet();

// the function can look outward and find name, but the reverse doesnt work
const test = () => {
  const secret = "hello";
};

console.log(secret); // error

/* 
PART 3 - CLOSURES
 */
const createCounter = () => {
  let count = 0;

  const increment = () => {
    count++;
    return count;
  };

  return increment;
};
//then
const counter = createCounter();
// Normally, you'd think all the variables disappear beause the function finishes
// But the increment still needs the variable count
// So javascript keeps access to that variable alive

/*
Part 4 — Why closures matter
*/
// closures are everywhere
const createMultiplier = multiplier => {
    return number => number * multiplier;
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

//now
double(5); //10
double(10); //20

/*
Part 5 - Higher-order functions
*/

// A higher-order function is simply a function that either:
// takes another function as an argument
// returns another function

products.map(product => product.name);
// map is a higher-order function because it receives a function
// same for:
filter()
find()
reduce()

//example
const calculate = (a, b, operation) => {
    return operation(a,b);
}

const add (a,b) => a+b;
const multiply (a,b) => a*b;

calculate(5,3,add);
calculate(5,3,multiply);

/*
PART 6 - RETURNING FUNCTIONS
*/
const createGreeting = greeting => {
  return name => {
    return `${greeting}, ${name}`;
  };
};

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

sayHello("Dusky"); // Hello Dusky
sayHi("Dusky"); // Hi Dusky

/*
PART 7 - Callback parameters deeper
*/
products.map(product => product.name);
// map() actually gives the callback more than one argument.
products.map((product, index) => {
    console.log(product);
    console.log(index);
})
// So if:
const names = ["Anna", "Ben", "Cara"];
//then
names.map((name, index) => {
    console.log(name);
    console.log(index);
});

//prints roughly
// Anna 0
// Ben 1
// Cara 2

/*
Part 8 — forEach() vs map()
*/

// map() returns a new array:
const doubled = [1,2,3].map(n=>n*2);
// result
[2,4,6]
// forEach() is usually for side effects:
[1,2,3].forEach(n => {
    console.log(n);
});

const result = numbers.forEach(n => n * 2);
// result is not [2, 4, 6].
// use map() for that.

/*
Part 9 - function declarations vs function expressions
*/

// You've seen
function greet() {
  return "Hello";
}
// and
const greet = () => {
  return "Hello";
};

// this works
greet();

function greet() {
  console.log("Hello");
}
// because function declarations are hoisted.
// but this generally does not.

greet();

const greet = () => {
  console.log("Hello");
};

// because greet isnt initialized yet.

/*
Part 10 — Modules
*/
// Real projects dont keep everything in one file.
// Suppose
utils.js
// Contains

export const add = (a, b) => {
  return a + b;
};

export const multiply = (a, b) => {
  return a * b;
};

// Then another file can import 
import { add, multiply } from "./utils.js"

add(5, 3);
multiply(5, 3);

// This is named export;

// DEFAULT EXPORT:
const greet = name => {
    return 'Hello ${name}';
};

export default greet;
//then
import greet from './greet.js';
// with default exports, the importing file can technically rename it:
import sayHello from './greet.js';
//Named exports usually use the exported name:
import { add } from "./utils.js";

/*
DAY 3 - PART A EXERCISES
*/

// 1. Scope: What prints?
const x = 10;

const test = () => {
  const x = 20;

  if (true) {
    const x = 30;
    console.log(x);
  }

  console.log(x);
};

test();
console.log(x);

// first console.log will print x=30, since in the function, its x is 30
// second console log would print x=20 since x=20 is outside of the true function
// last console log would print x=10

//2. Closure: What happens here?
const createCounter = () => {
  let count = 0;

  return () => {
    count++;
    return count;
  };
};

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// Count wouldn't reset since the counter is like a catcher function that is held within main (using C logic)
// so counter would be 3, utilizing the function and capturing what was inside since it returns a value

//3. Higher-order function: What does this return?
const operate = (a, b, fn) => {
  return fn(a, b);
};

const subtract = (a, b) => a - b;

const result = operate(10, 4, subtract);

// it would return 6, and fn is just a short term for function.

// 4. Returning Functions: What does this do?
const createTaxCalculator = taxRate = {
    return price => {
        return price + price * taxRate
    }
}

const calculateVAT = createTaxCalculator(0.12)
const result = calculateVAT(1000);

// createTaxCalculator returns variable of the price with price * taxRate
// calculateVAT then inputs that taxRate as 0.12 by calling it then inputting 0.12
// result would call calculateVAT, which then multiples 0.12 and 1000

// 5. map() callback arguments: given
const users = ["Anna", "Ben", "Cara"];
// what would this print?
users.map((user, index) => {
  console.log(`${index}: ${user}`);
});
//0 Anna
//1 Ben
//2 Cara

//6. map() vs forEach(): which should you use if you want:
const numbers = [1,2,3]
[10,20,30]

// I would use map(), then i call
numbers.map(n => n*10);
// it would help if you could expound more on forEach vs Map and its use cases

//7.Function Timing - What do you think happens?
sayHello();

const sayHello = () => {
    console.log("Hello");
};
// It wouldn't work since the sayHello wasn't initialized

//8. Modules - Suppose:
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

import { add, subtract} from './maths.js'

//9. Harder closure challenge
const createScore = () => {
  let score = 0;

  return {
    addPoint: () => {
      score++;
    },

    getScore: () => {
      return score;
    }
  };
};

const game = createScore();

game.addPoint();
game.addPoint();

console.log(game.getScore());

// game holds the function for createScore, then game accesses the function inside createScore, then
// stores it in the game since hte game variable is like a catcher function

