/* Arrow Functions 
Arrow functions are just a different
way to describe your functions
*/

// makes it alot better when you're using call back functions

const DoSomething = () => {

}

// if you're planning to export functions using normal functions

export default function DoSomething() {

}

//if you're using arrows
export const DoSomething = () => {

}

// it's important because you will be defining components
// components are just functions that takes in props / arguments, then returns html

const MyComponent = () =>{
    return 
    <div>
    </div>
}

// another thing is anonymous functions

<button onClick={() => 
{console.log("Hello World")}
}
</button>

/* Ternary 
react uses jsx, where you can write javascript in html files
using ternary for conditions so it doesn't make the file look messy"

ex. */

if(true){

} else{

}

// takes 5 lines of code

let age = 10;
let name = age > 10 ? "Pedro" : "Jack"

// works the same way as using the if else statement

const Component = () => {

    return age > 10  ? return <div> Pedro </div> : return <div> jack </div>
}


/* 
Objects, one of the most useful data structures
or dictionaries
/*

// very important in react

const person = {
    name: "Pedro",
    age: 20,
    isMarried: false,
};

const name = person.name
const age = person.age
const isMarried = person.isMarried

// taking too much space

const {name, age, isMarried} = person

const person ={
    name: "Pedro",
    age: 20,
    isMarried: False,
};

//person2 is exactly the same as person1
const person2 = {...person, name:"Jack"}

//... is a spread operator that keeps everything the same, but after that spread, it's different variable

//works the same as arrays

const names = ["Pedro", "Jack", "Jessica"]
const names2 = [...names, "Joel"]


/*
3 functions of javascript
useful for manipulating arrays
*/

.map()
.filter()

// map
let names = ["Pedro", "Jack", "Jessica"]

// takes in an argument that represents each value in the array
names.map((name) => {
    // writes code which changes each part of the array
    return name + "1";
});

names.map((name) => {
    return <h1>{name}</h1>
})

// filter
let names = ["Pedro", "Jack", "Jessica", "Pedro", "Pedro"]

names.filter((name) => {
    return name !== "Pedro"
})

//  returns jack and jessica

// async + await + fetch
// important since apps are always communicating with APIs




