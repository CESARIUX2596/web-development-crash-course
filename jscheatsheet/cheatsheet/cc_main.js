// Basic Alert (Pop up)
//  alert("Hello World");

console.log('Hello World')
console.error('This is an error')
console.warn('This is a warning')

console.clear()

// types of variables: var, let, cons
// var is globaly scoped

// let age1 = 30;
// age1 = 31
// console.log(age1)

// // const cant be reasigned.
// const age2 = 30;
// // age2 = 31; Cant be altered.
// console.log(age2)

// Data types: String, Numbers, Boolean, null, undefined, Symbol
const name = 'Paco Pedro';
const currentAge = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof currentAge);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// Concatenation
console.log('My name is '+ name  + 'and I am '+ currentAge);
// Template String
const greetings = `My name is ${name} and I am ${currentAge}`;
console.log(greetings);

const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toLowerCase());
// Splis by space, can be comma or any other symbol
console.log(s.split(' '));

// Arrays

const numers = new Array(1,2,3,4,5);
console.log(numers);
const fruits = ['apples', 'oranges', 'pears'];
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop() // pops mangos
console.log(fruits);
console.log(Array.isArray('mangos'))
console.log(fruits.indexOf('apples'))

const person = {
    firstName: 'Paco',
    lastName: 'Ramirez',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    addres: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.hobbies[1]);

const {firstName, lastName, addres:{ city}} = person;
console.log(firstName);
console.log(city);

person.email = 'paco@gmail.com';
console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].text);

const todoJSON =JSON.stringify(todos);

console.log(todoJSON)

for(let i=0; i<10; i++){
    console.log(i);
}

let i = 0;

while (i < 10){
    console.log(`Hey X ${i}`);
    i++;
}
// console.clear()

for (let i = 0; i<todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.id);
}

// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);

const l = 101;
if(l === 10){
    console.log('l is 10');
} else if(l < 10){
    console.log('l is not 10')
} else{
    console.log('l is greater than 10')
}
const m = 110;

if (l < 11 || m > 109){
    console.log('ye')
}

if (l > 11 && m > 109){
    console.log('ye\'nt')
}

// const e = 9;
// const color  = e > 10 ? 'red' : 'blue';
//  returns blue

const color = 'green'
console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break
}
// Basic type of functions
function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
}

console.log(addNums(1,2));
addNums()

const subsNums = (num1, num2) => num1 - num2;

console.log(subsNums(2,1));

// function Animal(specie, name, dob){
// // function Animal(specie, name, gender){
//     this.specie = specie;
//     this.name = name;
//     // this.gender = gender;
//     this.dob = new Date(dob);
// }
// Animal.prototype.getBirthYear = function(){ 
//     return  this.dob.getFullYear()
// }

class Animal {
    constructor(specie, name, dob){
        this.specie = specie;
        this.name = name;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
}


// const animal1 = new Animal('Dog', 'Ozzy', 'Male');
// const animal2 = new Animal('Dog', 'Tommy', 'Male');
const animal3 = new Animal('Dog', 'Duque', '3/6/1970');
console.log(animal3.getBirthYear());
// console.log(animal3.getName());


