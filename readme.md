Assignment 5
Submitted By: Moshud Muktadir

1. What is the difference between var, let, and const?
The primary differences lie in scope, hoisting, and re-assignment capabilities.

Scope: * var is function-scoped.

let and const are block-scoped (they only exist within the {} where they are defined).

Re-declaration & Hoisting: * var allows you to re-declare the same variable name and is hoisted (initialized as undefined).

let and const do not allow re-declaration in the same scope and exist in a "Temporal Dead Zone" until the code reaches their declaration.

Re-assignment: * var and let can be updated with new values.

const (constant) cannot be re-assigned after its initial declaration.

2. What is the spread operator (...)?
The spread operator allows an iterable (like an array or object) to be expanded into individual elements.

Immutability: It is used to create a shallow copy of an old array into a new one. If you modify the new array, the original remains unchanged.

Merging: It provides a clean syntax to merge multiple arrays or objects into a single one.

3. What is the difference between map(), filter(), and forEach()?
While all three iterate through an array, they serve different purposes:

forEach(): Executes a provided function once for each array element. It does not return a new array (returns undefined). It is used for "side effects" like logging.

map(): Iterates through the array and returns a brand new array by applying a transformation function to every element.

filter(): Iterates through the array and returns a new array containing only the elements that satisfy a specific condition.

4. What is an arrow function?
Introduced in ES6, arrow functions provide a shorter, more concise syntax for writing function expressions.

Key Feature: They do not have their own this binding; they inherit this from the parent scope.

Syntax: They replace the function keyword with the "fat arrow" => symbol.

5. What are template literals?
Template literals are a modern way to handle strings using backticks (`) instead of single or double quotes.

Interpolation: They allow embedding variables or expressions directly into the string using the ${expression} syntax.

Multiline support: They allow strings to span multiple lines without needing escape characters like \n.