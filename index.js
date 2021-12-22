// first thing variables and data structure
// 1 variable
/**
 * let keyword
 * The let keyword was introduced in ES6 (2015).
 * Variables defined with let must be Declared before use.
 * Variables defined with let cannot be Redeclared.
 * Variables defined with let have Block Scope.
 * Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
   ES6 introduced two important new JavaScript keywords: let and const.
   These two keywords provide Block Scope in JavaScript.
   Variables declared inside a { } block cannot be accessed from outside the block
 */
// example 1
// let x = 0;
// let x = "abdou";

// example 2
// var firstName = "abelkader";
// if (firstName) {
//   var lastname = "ahmed";
//   console.log("Local", lastname);
// }
// console.log("global", lastname);

/**
 * const keyword
 * The const keyword was introduced in ES6 (2015).
 * Variables defined with const cannot be Redeclared.
 * JavaScript const variables must be assigned a value when they are declared:
 * Variables defined with const cannot be Reassigned.
 * Variables defined with const have Block Scope.
 */
// example1
// const a;
//example2
// const b = 1
// const b = 2
//example3
// const a = "abdelkader"
// a = "lounis"

//2 data structures
/**
 * template strings
 * Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
 * With template literals, you can use both single and double quotes inside a string:
 * Template literals allows multiline strings
 * Template literals allows variables in strings
 */
//example 1 i write string syntaxe before ts then avec ts
// const fullName = `Abdelkader Lounis`
// example 2 the same example i edit i say before ts we cannot use them both in one string
// const fullName = `His name Abdelkader Lounis and he's a "software dev" `;
// console.log(fullName);
//example3 i say that before we cannot write multiline strigns we use let des= "abdoy"+  "tony"
// const description = `name:abdelkadr lounis
//                      age:23years
//                      profession:software dev
// `;
// console.log(description);
//example 3
// var a = 20;
// var b = 25;
// var c = a + b;
// console.log(`The some of a plus b is : ${c}`);

//searching strings are case sensitive
//example
const str = "Javascript session";
// console.log(str.startsWith("Java"))
// console.log(str.endsWith("er"))
// console.log(str.includes("scr"))
// console.log(str.search("ava")); // search tmedlk la position ta3 awel element m string li rak 7ab tcherchiha

//symbols
// symbbols are primitive types like strings arrays etc
// symbols are primarly used as unique ids with out conflicting with objects string keys
//example
// var id = Symbol();
// var desc = {
//   id: 586,
//   name: "javascript",
//   properties: ["strings", "arrays"],
// };
// desc[id] = 1235;
// console.log(desc);

//maps
/**
 * A Map holds key-value pairs where the keys can be any datatype.
 * A Map remembers the original insertion order of the keys.
 * A Map has a property that represents the size of the map.
 */

var mp = new Map();

// mp.set("firstName", "Abdelkader");
// mp.set("lastName", "Lounis");
//console.log(mp.firstName) we cant
//so to retreive an element
// console.log(mp.get("firstName"));

// we can get the  size of the map
// console.log(mp.size)

// we can pass element to a map as array
var mp2 = new Map([
  ["reactjs", "frontend"],
  ["nodejs", "backend"],
  ["jest", "testing"],
]);

// mp2.clear(); delete all elements
// mp2.delete("reactjs") delete element with key
// console.log(mp2.has("reactjs")) if element with key exists
// console.log(mp2);

// to iterate over a map
// mp2.forEach(function (item) {
//   console.log(item);
// });

// Sencond things arrays and arrays methods
//1 spread operator
/**
 * The JavaScript spread operator (...) allows us
 * to quickly copy all or part of an existing array
 * into another array.
 */
//imagine this situation
var web = ["html", "css", "js"];
var mobile = ["android", "flutter", "reactnative"];

var language = ["c", "c++"];
/**
 * if we want to add the content of web and mobile to
 * language we do this
 */
var language = ["c", "c++", web, mobile];
console.log(language);
/**
 * here we can see that the elements were added but as
 * nested arrays and here comes the spread operator
 */

var language = ["c", "c++", ...web, ...mobile];
console.log(language);

// arrays distruction
/**
 * a way to extract  data from an array or object
 * and asign them to a variable
 * assign a variable to a position in an array
 * Destructuring can also operate
 * efficiently with complex functions, default values,
 * and more.
 */

var info = ["Abdelkader", "Lounis"];
// before if we want to access first element
console.log(info[0]);
// but with array distruction we can assign the value
// to a variable and we can access it throughout that var
let [firstName, lastName] = info;
console.log(firstName);

// example 2
let [first, , , , fifth] = ["html", "css", "js", "react", "node"];

console.log(fifth);

// search in an array
console.log(info.includes("Abdelkader"));

// Third thing ecma script objects
// object literal enhancement
//imagine we haave a function that returns an object

function fct(firstName, lastName, age, profession) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    profession: profession,
  };
}
console.log(fct("Abdelkader", "Lounis", "23", "software dev").firstName);

// imgine we a lot a  arguments to be passsed
// it will be very annoying when return an object
// because of the assignment

// here comes objectl literal enhancement
// in es6 we can replace what we did by this

function fct2(firstName, lastName, age, profession) {
  return {
    firstName,
    lastName,
    age,
    profession,
  };
}
console.log(fct("Abdelkader", "Lounis", "23", "software dev").age);

// 2 object distruction
//example
var web = {
  front: "reactjs",
  back: "nodejs",
};
var desktop = "java";

var all = { web, desktop };
console.log(all);
var all = { ...web, desktop };
console.log(all);

// 3 object distructuring
var obj = { fruit: "apple", vegitable: "potato" };
let { fruit, vegitable } = obj;
console.log(fruit);

// for of loop
// for of is new type of loop that allows iterating
//over strings arrays maps sets etc

var str2 = "javascript";
for (let char of str2) {
  console.log(char);
}
var arr3 = ["html", "css", "js"];
for (item of arr3) {
  console.log(item);
}
