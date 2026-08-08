/*
1. DEFAULT PARAMETERS
*/

// you can give function parameters fallback values:

const greet = (name = 'Guest') => {
    return 'Hello {name}';
};

greet("Dusky") //would print Hello Dusky
greet() //would print Hello Guest

/*
2. OPTIONAL CHAINING
*/

const user = {
    name: "Dusky"
};

console.log(user.address.city)
// Would crash because address is undefined
// Optional chaining fixes that!
console.log(user.address?.city)
//meaning if address exists, return. if not, return undefined.


/*
3. NULLISH COALESCING
*/

const username = null;
// you can write
const displayName = username ?? "Guest";
"Guest" // result
//means use the right side only if the left side is null or undefined.
// different from ||
const stock = 0;
console.log(stock || 10); // 10
console.log(stock ?? 10); // 0

/*
4. TERNARY OPERTOR
*/

//instead of:

let message;

if(user.active){
    message = "active";
}else{
    message = "inactive";
};

// you can write:
const message = user.active ? "active" : "inactive"
// condition ? valueifTrue : valueifFalse
// react uses this constantly
{user.active ? <Dashboard/> : <Login/> }

/*
5. SHORT CIRCUIT
*/
const user = {
    isAdmin: true
};

//you might see
user.isAdmin() && showAdminPanel();
//meaning if the isAdmin is truthy, execute the right side
//In react:
{isLoggedIn && <Dashboard/>}
//meaning render the dashboard if the user is logged in

/*
6. Object shorthand
*/
//instead of 
const name = "Dusky";
const age = 21;

const User = {
    name: name,
    age: age
};

//javascript lets you write

const User = {
    name, 
    age
};

/*
7. COMPUTED VALUES
*/

const product = {
    price: 100,
    quantity: 3
};
// you don't always need to store total: 300
// can derive

const total = product.price * product.quantity;

/*
8. FUNCTION PARAMETERS WITH OBJECTS
*/

const printUser = user => {
    console.log(user.name);
    console.log(user.age);
}

// you can destructure it

const printUser = ({name, age}) => {
    console.log(name);
    console.log(age);
}

// if you call
printUser({
    name: "Dusky",
    age: 21
});
//Js destructures the argument immediately

function Welcome ({ name }){
    return <h1>Hello {name}</h1>
}

/*
9. COMBINING EVERYTHING!
*/

const user = {
    name: "Dusky",
    profile:{
        nickname: NULL
    };
    active: true;
}

// could write
const displayName = user.profile?.nickname ?? user.name;
const status = user.active ? "Online" : "Offline"


/*
DAY 2 PART B EXERCISES
*/

// 1.  What do these return?
const greet = (name = "Guest") => {
  return `Hello ${name}`;
};

greet();
greet("Dusky");

// First function would return Hello Guest since Guest is use as the
// fallback value if no value is provided, and then the second function would say Hello Dusky

// 2. Given
const user = {
  name: "Dusky"
};

// What happens with:
user.address?.city
//what about:
user.address.city

//for the first, it's a safety measure to check if it exists, if it doesn't would return undefined
// the second would just cause it to crash since i'm trying to access soemthing that doesnt exist

// 3. What are the results
const stock = 0;

const a = stock || 10;
const b = stock ?? 10;

// the result with A is it's using an OR operator, so either conditions would be ok
// B wouuld print 0, if the first data is null, then print that

// 4. convert this
let result;

if (product.stock > 0) {
  result = "Available";
} else {
  result = "Out of stock";
}

const result = product.stock > 0 ? "Available" : "Out of Stock"

// 5. Given
const name = "Dusky";
const course = "BSIT";
const year = 3;

const user {
    name,
    course, 
    year,
};

//6. Explain what this funciton expects:
const printProduct = ({ name, price }) => {
  console.log(name);
  console.log(price);
};
// And what happens if we call:
printProduct({
  name: "Keyboard",
  price: 1500,
  stock: 5
});

// I would say yes since it wasn't indicated in the parameters the stock, just name and price.

// 7. React-style code reading
// Without knowing React yet, explain as much as you can:
function ProductCard({ product }) {
  const status = product.stock > 0
    ? "Available"
    : "Out of stock";

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price ?? "No price"}</p>
      <p>{status}</p>
    </div>
  );
}

// Function that calls productCard with product as its parameters, assuming product is an object (or i think it is)
// will display product name with h2 tag, 
// then paragraph tag with price, if price is undefined, will print No Price.
// status coming from the ternary operator that shows if product stock greater than 0, update the status either available or out of stock.

// 8. Hardest one
// Given
const user = {
  name: "Dusky",
  settings: {
    displayName: null
  }
};

//write a vairable called DisplayName that
/*
uses settings.displayName if it exists,
otherwise uses user.name,
and doesn't crash if settings itself doesn't exist.
*/

function displayName({user}){

    return(
        console.log(user.name);
        console.log(user.settings?.displayName ?? user.name);
    )
}