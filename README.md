 #javascript interview questions
Javascript Topics


1 Execution context and lexical environment 
Syntax parser
Lexical Environment - where your code sits physically
Execution context- a wrapper to help manage the code  that is running, make sure which lexical environment is running currently
Global environment and global object -> Global Execution context - this, Global not inside a function
Executation context - Creation phase - setup memory space for variables and function, undefined is set up by javascript

Net server value undefined proagramttically , it is set up javascript engine ->
Execution stack
Single threaded synchronous
Hoisting
Executation stack
Scope chain
ES6 and let
Asychronous callback

False == 0 / true
Null == 0 // false
“” == 0 // true
Null <  //1 true
“” == false // true
A = 0;
if(A) {
Will not run

}


2 Types and operators
Primitive and non primitive
Precedence and Associativity
Type Coercion
Comparison Operators, 
default values,
 Equality Comparison, == & ===


3 Objects & Functions
Object literals
Functions are Objects
Function Statement and function expression
By value and by reference
Object function and this
Array - collections of anything
Arguments and spread
Function overloading
Automatic semicolon insertion
IIFE - by this we create logical namespace
Closure - function factories, callbacks - close helps in create encapsulation, what need to be shown and what need to be hidden, also called module reveal pattern. 

Call, apply and bind
Function programming- passing function to another function and return function. First class function
Underscore.js
Lodash
All helper function implementation and supported everywhere


4 OOPS and prototypal inheritence
Prototype and __proto__
 Reflection and extend - _.extend
Prototype chain

5 Building Objects
new with function constructor new FunctionName();
prototype with method
Built in function constructor new Number()
Array are object so avoid using for in loop as it will take protype properties
Pure prototypal inheritence with Object.create(baseObject) . It creates prototype with base object
ES6 and classes

6 Promise, fetch, async and await

7 let, const , arrow function and destructuring
Arrow functions are not suitable on method of object because they don't point of object this. 
Temporal dead zone

8 Transpile - to convert syntax of one programming language to another

9 0.1+0.2, bigInt, Number.max_safe_integer

10 Generators, function* and yield, .next() return value and done property


