/*
Day 3 — Part B: Closures, Callbacks, Function Composition, Error Handling
*/

// 1. Closures with configuration
// Look at this:
const createLogger = prefix => {
  return message => {
    console.log(`${prefix}: ${message}`);
  };
};

const errorLogger = createLogger("ERROR");
const infoLogger = createLogger("INFO");

errorLogger("Database Failed."); // prints ERROR: Database Failed
infoLogger("Server Started"); // prints INFO: Server started

// why?

// because each returned function remembers a different prefix

/*
errorLogger → remembers "ERROR"
infoLogger  → remembers "INFO"
*/

// 2. Closures with private state.
// You saw this already
const createCounter = () => {
  let count = 0;

  return () => {
    count++;
    return count;
  };
};

//now a slightly more realistic version
const createCart = () => {
  let items = [];

  return {
    addItem: item => {
      items.push(item);
    },

    getItems: () => {
      return items;
    },

    getCount: () => {
      return items.length;
    }
  };
};

// then
const cart = createCart();

cart.addItem("Keyboard");
cart.addItem("Mouse");

cart.getCount(); // 2
cart.getItems(); // ["Keyboard", "Mouse"]

// 3. Callbacks in actual async-style code
// Even before we formally do async, callbacks matter.

// Example:

const processUser = (user, OnSuccess) => {
    if(user.active){
        OnSuccess(user);
    }
}

//call:
processUser(
    { name: "Dusky", active: true }, 
    user => {
        console.log('Welcome ${user.name}')
    }
);

// the second argument is a callback.
// processUser decides when to call it
// the function receiving a callback controls when the callback runs

// 4. Callback with success and failure
const login = (user, onSuccess, onError) => {
  if (user.password === "1234") {
    onSuccess(user);
  } else {
    onError("Invalid password");
  }
};

// Usage:
login(
  { name: "Dusky", password: "1234" },

  user => {
    console.log(`Welcome ${user.name}`);
  },

  error => {
    console.log(error);
  }
);

// 5. Function composition: Suppose
const addOne = n => n+1;
const double = n => n*2;

// then
const result = double(addOne(5));

//flow: 5->6->12

//6. Resuable predicates
// A predicate is just a function that returns true or false

const isInStock = product => product.stock > 0
const availableProduct = products.filter(isInStock);

const avaiableProducts = products.filter(
    product => product.stock > 0
);

// 7. Reusable transformations
// Same idea with map()

const getName = product => product.name;
const names = products.map(getName);

// filter → predicate function
// map    → transformation function

// 8. Error handling with try...catch

try {
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    console.log("Something failed")
}

// 9. Throwing your own errors
// You can deliberately throw an error

const divide = (a,b) => {
    if (b===0){
        throw new Error("Cannot divide by zero")
    }

    return a/b;
};
//then
try {
    console.log(divide(10,0));
} catch(error){
    console.log(error.message);
}

// 10. Why throw is different from return
// This:
return "Invalid input" // is just returning a string

// This:
throw new Error("Invalid input")
// interrupts normal execution and sends control to a matching catch

// 11. Guard clauses
// You'll see this pattern conssitenly

//instead of:
const getUserName = user =>{
    if(user){
        if(user.active){
            return user.name
        }
    }
    return null;
}

// Prefer
const getUserName = user => {
  if (!user) {
    return null;
  }

  if (!user.active) {
    return null;
  }

  return user.name;
};
// These early exists are called guard clauses

// 12. Combining callbacks + guard clauses

const processOrder = (order, onSuccess) {
    if(!order){
        return;
    }

    if(order.total <= 0){
        return;
    }

    onSuccess(order);
}

// DAY 3 PART B EXERCISES:

// 1. CLOSURE: What does this print?
const createDiscount = discount => {
  return price => {
    return price - price * discount;
  };
};

const studentDiscount = createDiscount(0.2);

console.log(studentDiscount(1000));

// it will print the value of 1000 - (1000*2)
// studentDiscount remembers the value that we passed using the createDiscount which was 0.2.

// 2. Separate closures: What prints?
const createCounter = () => {
  let count = 0;

  return () => ++count;
};

const a = createCounter();
const b = createCounter();

console.log(a());
console.log(a());
console.log(b());
console.log(a());

//console log for A would print 3, then console log B would print 1
// based from my thinking or mental model from C, it's because they are differnt variables holding different createCounter functions
// so A points to its own createCounter, while B points to its own createCounter

// 3. Callback timing: what happens here?
const runIfActive = (user, callback) => {
  if (user.active) {
    callback(user);
  }
};

runIfActive(
  { name: "Dusky", active: true },
  user => console.log(user.name)
);

// what would decide if the callback runs is the if condition, so
// in the first, it would call the funciton callback(user)
// in the second, that function would execute where it would print my name, since the data i'm passing to the callback function "callback" says that i am active

// 4. Predicate: Given
const products = [
  { name: "Mouse", stock: 3 },
  { name: "Keyboard", stock: 0 },
  { name: "Monitor", stock: 2 }
];

// Write a reusable function:
// Then use it with filter()

products.filter(products => products.stock >= 0);

//CORRECT ANSWER
const isInStock = product => product.stock > 0
const availableProducts = products.filter(isInStock)

// 5. Transformation Function
const getProductName = products.map(products => products.name)

//CORRECT ANSWER
const getProductName = product => product.name
const names = product.map(getProductNames)

// 6. try...catch: what happens here?
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero");
  }

  return a / b;
};

try {
  console.log(divide(10, 0));
  console.log("Done");
} catch (error) {
  console.log(error.message);
}

// No, done does not print since it meets the if condition where b is equals to 0
// it would log the error message using catch

// 7. Guard Clause: Rewrite this using guard clauses
const getDiscount = user => {
  if (user) {
    if (user.active) {
      if (user.isStudent) {
        return 0.2;
      }
    }
  }

  return 0;
};

const getDiscount = user = {

    if(!user){
        return 0;
    }

    if(!user.active){
        return 0;
    }

    if(!user.isStudent){
        return 0;
    }

    return 0.2
}

// 8. Harder callback challenge: What does this print?
const process = (value, first, second) => {
  const result1 = first(value);
  const result2 = second(result1);

  return result2;
};

const addFive = n => n + 5;
const double = n => n * 2;

console.log(process(10, addFive, double));

//first, process is called with the value of 10
//then result1 would call addFive, returning 15
//result2 would call double, then use 15 and return 30
//result is 30

// 9. Hardest one: What does this print?
const createBankAccount = initialBalance => {
  let balance = initialBalance;

  return {
    deposit: amount => {
      balance += amount;
    },

    withdraw: amount => {
      if (amount > balance) {
        throw new Error("Insufficient funds");
      }

      balance -= amount;
    },

    getBalance: () => balance
  };
};

const account = createBankAccount(1000);

account.deposit(500);

try {
  account.withdraw(2000);
} catch (error) {
  console.log(error.message);
}

console.log(account.getBalance());

// it would print error message and the balance, since initial was 1000, then deposit 500, and system tried to withdraw 2000, whhich would throw an error
// the balance has the value at the end because... actually i'm unsure, i was gonna say because balance was assigned with initialBalance



// 1. Function or result?: For each variable, tell me whether it stores a function or a value/result
const getName = user => user.name
const a = getName
const b  getName({name: "Dusky"})

// a stores a function
// b stores a result 

// 2. Fix the reusable callback: Given
const users = [
    { name: "Anna", active: true },
    { name: "Ben", active: false },
    { name: "Cara", active: true },
];

const isActive = users => users.active
const activeUsers = users.filter(isActive);

// 3. Fix the transformation function
// create a reusable function called:
getUserName
// then use it with map() to get
["Anna", "Ben", "Cara"]

const getUserName = names => names.name
const nameList = name.map(getUserName)

// 4. Function execution timing
// explain the difference:
buttonHandler(saveUser);
//versus
buttonHandler(saveUser());

// saveUser only runs when the buttonHandler is run (callback)
// saveUser runs before the buttonHandler is ever executed i think..

// 5. Separate closures: predict every line
const createCounter = start => {
  let count = start;

  return () => {
    count += 2;
    return count;
  };
};

const first = createCounter(0);
const second = createCounter(10);

console.log(first());
console.log(first());
console.log(second());
console.log(first());
console.log(second());

// the 2 lines don't interfere because they have their own connection with their own createCounter
// first would print 2, then 4, then 6
// second would print 12, then 14

// 6. Shared Closure: predict the final output:
const createScore = () => {
  let score = 10;

  return {
    add: amount => {
      score += amount;
    },

    subtract: amount => {
      score -= amount;
    },

    get: () => score
  };
};

const game = createScore();

game.add(5);
game.subtract(3);

console.log(game.get());

// the variable that all 3 methods are sharing is the score inside the createScore
// the output would be 12

//7. Two independent bank accounts
const createAccount = balance => {
  return {
    deposit: amount => {
      balance += amount;
    },

    getBalance: () => balance
  };
};

const a = createAccount(100);
const b = createAccount(500);

a.deposit(50);
b.deposit(100);
a.deposit(25);

console.log(a.getBalance());
console.log(b.getBalance());

//a would print 175, then b would print 600

// 8. Guard-clause refactor
// rewrite this without changing its behavior:
const canPurchase = user => {
  if (user) {
    if (user.active) {
      if (user.balance >= 100) {
        return true;
      }
    }
  }

  return false;
};

const canPurchase = user => {
    if(!user){
        return false
    }

    if(!user.active){
        return false
    }

    if(user.balance < 100){
        return false
    }

    return true;
}

// 9. Preserve the return value
// Fix this refactor:
const getRole = user => {
  if (!user) {
    return null;
  }

  if (!user.active) {
    return null;
  }

  return user.role;
};
// The original behavior was
const getRole = user => {
  if (user && user.active) {
    return user.role;
  }

  return "guest";
};

// your rewritten version must behave exactly like the original

const getRole = user => {
    if(!user && !user.active){
        return "guest";
    }
    return user.role;
}

// 10. Find the callback bug: what's wrong here?

const numbers = [1, 2, 3];

const double = n => n * 2;

const result = numbers.map(double());

//Fix it and explain why

const fixed = numbers.map(double);

// the error was the double(), why? because double() isn't a callback function, would execute immediately (can't explain it better like the difference between both)

// 11. Find the parameter bug: What's wrong here?
const getPrice = price => price;

const prices = products.map(getPrice);

// Assume products contain objects like:
{
    name: "Keyboard",
    price: 1500
}

const getPrice = products => products.price

// 12. Predicate Precision: Given
const products = [
  { name: "Mouse", stock: 3 },
  { name: "Keyboard", stock: 0 },
  { name: "Monitor", stock: 2 }
];

// create: const isOutofStock = ...

// Then use it with filter

const isOutofStock = products => products.stock === 0
const checker = products.filter(isOutofStock);

// 13. Closure + error handling: predict the output
const createWallet = initial => {
  let balance = initial;

  return {
    spend: amount => {
      if (amount > balance) {
        throw new Error("Not enough money");
      }

      balance -= amount;
    },

    getBalance: () => balance
  };
};

const wallet = createWallet(500);

try {
  wallet.spend(200);
  wallet.spend(400);
} catch (error) {
  console.log(error.message);
}

console.log(wallet.getBalance());

// balance doesn't become negative since the throw error comes first before the balance -= amount

// 14. Harder function/result distinction
const createMultiplier = multiplier => {
  return number => number * multiplier;
};

const double = createMultiplier(2);

const x = double;
const y = double(5);
const z = createMultiplier(3);
const result = z(4);

// double contains the createMultiplier with the value of the multiplier being 2
// x doesn't do anything i think, it just points to multiplier and doesn't have any value
// y holds 10, since passing value to double with 5
// z also adjusts the multipler value to 3
// result would have 12 as the result 

// 15. Write this yourself: Create a function:
createDiscountChecker
// Usage should work like this:
const studentChecker = createDiscountChecker(0.2);
studentChecker(1000); // then return 800

// then create:
const seniorChecker = createDiscountChecker(0.3);
seniorChecker(1000) // returns 70

//FINAL ANSWER
createDiscountChecker = discount => {
    return price => {
        price - price * discount;
    }
}


// REINFORCEMENT -- ARRAY VS ITEM VS CALLBACK VS RESULT


// 1. Label each variable
// Given
const users = [
  { name: "Anna", active: true },
  { name: "Ben", active: false }
];

const isActive = user => user.active;

const activeUsers = users.filter(isActive);

// Tell me which one is: users, user, isActive, activeUsers

// users holds all the data
// isActive is a function that finds in each user if it's active, user is just the variable name, i can use banana
// activeUsers calls the function isActive to filter out which usrs are active, reusable function for other arrays if there are so

// 2. Fix the bug
const users = [
  { name: "Anna" },
  { name: "Ben" }
];

const getName = users => users.name;
const names = getName.map(users);

// Fix it so names becomes:
["Anna", "Ben"]

// FIXED:

const users = [
  { name: "Anna" },
  { name: "Ben" }
];

const getName = users => users.name;
const names = users.map(getName)

// 3. Function or result?: What does each hold?
const double = n => n * 2;

const a = double;
const b = double(5);

// a points to double, b holds 10 since i'm passing 5

// 4. Callback or expected value?: Which one is correct if map() needs to call getName for every user?

users.map(getName) // is the correct one, since map itself is a function, if we use getName(), it would return its own result, then pass to map. What we want is map to retrieve value from getName whenever map calls it
// the second one, getName would run first with no data in return or reference

// 5. One item vs whole array: given
const products = [
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 }
];
// Fix this:
const getPrice = products => products.price;

const priceList = products.map(getPrice);

// 6. Predicate vs Result
const products = [
  { name: "Mouse", stock: 3 },
  { name: "Keyboard", stock: 0 }
];

const isAvailable = product => product.stock > 0
const availableProducts = products.filter(isAvailable)

// 7. Spot the wrong variable
const users = [
  { name: "Anna" },
  { name: "Ben" }
];

const getName = user => user.name;

const names = getName.map(getName);

//should be names = users.map(getName);

// 8. Closure check
const createAdder = amount => {
  return number => number + amount;
};

const addFive = createAdder(5);

const result = addFive(10);

// tell me: createAdder, addFive, result

// function here is the createAdder, which assigns the value of 5
// calling addFive(10), it would add 10 to 5 (which was the value assigned to amount), then returns 15

// 9. Missing return: What's wrong here?
const createMultiplier = multiplier => {
  return number => {
    number * multiplier;
  };
};

// fix it

const createMultiplier = multiplier => {
    return number => {
        return number * multiplier;
    };
};

// 10. Final Mini-Combo: Given
const users = [
  { name: "Anna", age: 17, active: true },
  { name: "Ben", age: 22, active: false },
  { name: "Cara", age: 24, active: true }
];

// create these separately:
const isActive = ...
const isAdult = ...
const getName = ...

// then use them to get
["Cara"]

const isActive = user => user.active
const isAdult = user => user.age > 18
const getname = user => user.name

const combo = user
.filter(isActive)
.filter(isAdult)
.map(getName)




