/*
QUICK RECALL
*/

const product = {
    name: "Dusky",
    price: 200,
};

const newProduct = product
product.name = "Ethan"

// product name would be now ethan inside the object
// this is because of referencing
// but what if we actually want to create a new object using what exists?

/*
1. SPREAD SYNTAX [...]
*/

const user = {
    name: "Dusky",
    age: 21,
    role: "Student",
}

// we can write the following:

const newUser = {
    ...user
};

//broken down would look like this

const newUser = {
    name: user.name,
    age: user.age,
    role: user.role,
}

// user ---> object A
// newUser ---> object B

// therefore, if i were to call

console.log(user.name) // this would print Dusky

/*
Copy AND change something
*/

const user = {
  name: "Dusky",
  age: 21,
  active: true
};

const updatedUser = {
  ...user,
  age: 22
};

//...user would copy all of the data except the age since it is reassigned.

/*
Why the hell does REACT care?
*/

// there would be states like this

const [user, setUser] = useState({
    name: "Dusky",
    age: 21
})

// you would commonly see

setUser({
    ...user,
    age: 22
})

//rather than doing 
user.age = 22;

/*
SPREAD WITH ARRAYS
*/

// same concept

const numbers = [2,3,4]
const newArr = [...numbers]

//now i can add on to the newArr since i used the spread operator

const newArr = [...numbers, 4] // [2,3,4,4]
const newArr = [0, ...numbers] // [0,2,3,4]
const first = [1,2,3]
const second = [4,5,6]
const combined = [...first, ...second] //[1,2,3,4,5,6]

/*
DESTRUCTURING - ROUND 2
*/

const product = {
  id: 1,
  name: "Keyboard",
  price: 1500,
  stock: 5
};

// instead of

const name = product.name
const price = product.price

const { name, price } = product //can do this isntead

/*
Rename while destructing
*/

const name = "Dusky";
const product ={
    name: "Keyboard",
    price: 200
};

//  You can't conveniently declare another name in the same scope.

const {
  name: productName,
  price
} = product;
// this means "take the name property and store it under a variable called productName"

/*
Array Destructuring
*/
const coordinates = [10,20]

const [x,y] = coordinates;

const {name, age} = user

/*
REST SYNTAX ...
*/
//Same three dots. Different context.
// Suppose:
const { name, ...otherInfo } = user;
//now name is Dusky and otherInfo is
{
    age: 21,
    role: student
}

//... means put the rest of the property here

/*
REST PARAMETERS
*/

// functions can do this too
const add = (...numbers) => {
    console.log(numbers);
};
//call
add(1,2,3,4)
//inside numbers
[1,2,3,4]
//so

const sum = (...numbers) => {
    return numbers.reduce(
        (total, number) => total + number,
        0
    );
};

//then
sum(10,20,30);
//returns
60

/*
HERES WHEN THINGS GET NASTY!
*/

const user = {
  name: "Dusky",
  address: {
    city: "Cebu"
  }
};

const copiedUser = {
  ...user
};

copiedUser.address.city = "Manila";
console.log(user.address.city);
//would print Manila, because the nested address object is still shared.

// to copy nested objects

const updatedUser = {
    ...user,

    address: {
        ...user.address,
        city: "Cebu"
    }
};


// DAY 2 - PART A exercises

// 1. What does user.name print?

const user = {
    name:"Dusky",
    age: 21,
};

const updatedUser = {
    ...user,
    name: "John"
};

// what does updatedUser.name contain? and explain why they're different
/*
The updatedUser.name would contain John, i copied all the innformation
and updated the name inside the new object called updatedUser
*/

// 2. What's wrong with this intention is to create an independent object?
const product = {
  name: "Keyboard",
  price: 1500
};

const copy = product;

copy.price = 2000;
// what's wrong here is that it will create a reference, and modify the original data, to fix this i can do:
const copy = {
    ...product,
    price: 2000
},

// 3. Given:
const product = {
  id: 7,
  name: "Monitor",
  price: 9000,
  stock: 3
};

// destructure name, price, and stock 
const { name, price, stock } = product;

// 4. Given :
const numbers = [10, 20, 30, 40];

// what will these contain?
const [first, second] = numbers;
//ANSWER: it would contain the first 2 numbers, 10 and 20

// 5. without using .push(), turn
const numbers = [1,2,3]
// into a new array containing
[1,2,3,4]

const newArr = [...numbers, 4]

// 6. What does remaining contain?
const user = {
  name: "Dusky",
  age: 21,
  role: "student",
  active: true
};

const { name, ...remaining } = user;

// remaining would contain the other variables like age, role, and active

// 7. What prints?
const user = {
  name: "Dusky",
  settings: {
    theme: "dark",
    notifications: true
  }
};

const copiedUser = {
  ...user
};

copiedUser.settings.theme = "light";

console.log(user.settings.theme);

// What would print here is that the theme would be "light", despite creating a new object, copying everything
// just creates a reference inside the object. which is why if i were to change it (u didnt ask for this but)
//i would use

const copiedUser = {
    ...user,
    settings:{
        ...settings,
        theme: "light",
    }
};

// 8. React-preparation challenge, you have
const product = {
  id: 1,
  name: "Keyboard",
  details: {
    price: 1500,
    stock: 5
  }
};

//create updatedProduct where stock becomes 10

const updatedProduct = {
    ...product,
    details:{
        ...details,
        stock: 10,
    }
};










