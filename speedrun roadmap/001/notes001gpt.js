/*
PART 1: let vs const
*/

let score = 10;
score = 20; // allowed

/*
let means the variable can be reassigned.
but for const
*/

const score = 10;
score = 20; //not allowed!

/*
const means the variable binding cannot be reassigned.
but there is important JS behavior.
*/

const user = {
    name: "Dusky",
    age: 21
};

user.age = 22; // ALLOWED

/*
why?
because this didnt happen:
user = anotherUser; 
The variable user still points to the same object.
You only changed something inside the object.
*/

/*
PART 2: Objects
*/

/*
In javascript, objects are like struct in C.

struct User{
    char Name[50];
    int age;
    }
*/

const user = {
    name: "Dusky",
    age: 21,
    active: true
};

// access by user.name or user.age
// modify by user.age = 22;
// add a property dynamically user.email = "dusky@example.com"

/*
PART 3: REFERENCES
*/

// What does this print?

const user1 = {
    name: "Dusky"
};

const user2 = user1;

user2.name = "John"

console.log(user1.name);

// would print out John, why?
// because of const user2 = user1.
// it didn't copy the entire object, both variables now refer the same object.

/*
user1 -> { name: Dusky} <- user2
*/

/*
PART 4: Functions in JavaScript
*/

// Normal function
function add(a, b){
    return a+b;
}
// Arrow Function
const add = (a,b) => {
    return a+b;
};
// shorter version
const add = (a,b) => a+b;

/*
All three can perform the same job.
But Javascript does something extremely important.
*/
// You can store them.
const greet = () =>{
    console.log("Hello")
};
// Pass them.
runSomething(greet);
//Return them, put them inside objects, arrays

/*
PART 5: Callbacks
*/

function execute(operation){
    operation();
}

const sayHello = () =>{
    console.log("hello world");
};

// We're passing the function itself.
execute(sayHello);
// Not
execute(sayHello());

sayHello
// means: here's the function
sayHello()
// means execute the function right now and give me its returned result.
// this is importnat in react since there'll be stuff like

<button onClick={handleClick}/>

/*
PART 6: DESTRUCTURING
*/

const user = {
  name: "Dusky",
  age: 21,
  role: "student"
};

// Normally
const name = user.name;
const role = user.role;

// Destructuring allows you to write:
const { name, role } = user;

/* now
name // "Dusky"
role // "Student"

But user.age still exsits.

Arrays can be destructured too.
*/

const numbers = [10,20,30];

const [first, second] = numbers;
first //10
second //20

//This wil matter later because React uses syntax like:
const [count, setCount] = useState(0);


/*
PART 7: MAP
*/

//Suppose:
const numbers = [1,2,3];
//you want: 
[2,4,6]
// I could use a for loop, but javascript already has methods like:
const doubled = numbers.map(number=>number*2);

/*
PART 8: Filter
*/

const numbers = [1,2,3,4,5];

const evenNumbers = numbers.filter(
    number => number % 2 === 0
);

//result:
[2,4]
//true -> keep item ; false -> remove item

/*
PART 9: Find
*/

const users = [
    { id: 1, name: "Dusky"},
    { id: 2, name: "John"},
    { id: 3, name: "Mary"}
];

const user = users.find(
    user => user.id === 2
);

//result
{
    id: 2,
    name: "John"
}

// filter -> potentailly many results -> array
// find -> first matching result, one item

/*
PART 10 - chaining
*/
const users = [
  { name: "Dusky", age: 21, active: true },
  { name: "John", age: 17, active: true },
  { name: "Mary", age: 25, active: false },
  { name: "Alex", age: 24, active: true }
];

const results = users
.filter(user => user.active); // Dusky, John, Alex
.filter(user => user.age >= 18); // Dusky, Alex
.map(user => user.name); // ["Dusky", "Alex"]

/*
const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 1500,
    stock: 5,
    category: "Accessories"
  },
  {
    id: 2,
    name: "Mouse",
    price: 800,
    stock: 0,
    category: "Accessories"
  },
  {
    id: 3,
    name: "Monitor",
    price: 9000,
    stock: 3,
    category: "Displays"
  },
  {
    id: 4,
    name: "HDMI Cable",
    price: 400,
    stock: 12,
    category: "Accessories"
  }
];
*/

//1
const results = products
.find(p => p.id === 3)

//2
const results = []
results = products.filter(p => p.stock > 0)
// or can i just do this?
const result s = products.filter(p => p.stock > 0)

//3
const results = []
results = products.map(product => product.name)
// or can i jsut do this?
const results = products.map(product => product.name)

//4
const results = products
.filter(p => p.stock > 0)
.filter(p => p.price >= 1000)
.map(p => p.name)

//5
const getProductName = (p) =>{
    return p.name
};
//or 
const getProductName = (p) => p.name

//6
i'm populating names variable with product.name, so first it maps, then calls the function getProductName

//1
result will contain [3,6,9], and who gives N its value is map
//2
it is returning products in which is stock is greater than 0
//3
products.map loops through every product then does the function
while the products.map(getproductName()) executes the getProductName direclty(?)
//4
const getPrice = (p) => p.price;