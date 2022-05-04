const newArr = [1, 2, 7, 9, 15];
const students = ["James", "Rachel"];
const mixedArr = [null, "Alice", false, undefined];

var cart = ["iphone", "mouse", "shirt"];
var mouse = [1];
console.log(mouse);
console.log(cart);

console.log(cart.length);

var nestedVar = [1, 2, 3, 4, ["iphone", "mouse", "shirt", "milk"] ];
console.log(nestedVar);
console.log(nestedVar[4][0]);

var shoppingCart = ["iphone", "mouse", "shirt"];
const pushedArr = shoppingCart.push("car");
console.log("shopping cart" + shoppingCart.push("slippers"));

const sortArr = shoppingCart.sort();

var breakfast = ["milk", "eggs", "juice"];
const count = breakfast.push("bread");
console.log(breakfast.pop());
console.log(breakfast.length);

function myFunction(shoppingCart){
  return shoppingCart[shoppingCart.length -1];
}

console.log(myFunction(shoppingCart));

const musicGenres = ["rock", "rap"];
const pushedJazz = musicGenres.push("jazz");
console.log(musicGenres);

function replaceRap(array){
  if(array.length % 2 !== 0){
    const mid = (array.length - 1) / 2;
    array[mid] = "classical";
    return array;
  } else {
    return console.log("number is even");
  }
  
}
console.log(replaceRap(musicGenres));

console.log(students.sort().reverse());
console.log(students.reverse());

//loops
const arrayForLoops = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < arrayForLoops.length; index++) {
console.log("this");  
}
let check = 0;
while (check < 6) {
console.log("while");
check++;
}

//google nested arrays for  strings is next below

let country = "United Kingdom";
let newString = "";

console.log(country.toLocaleUpperCase());
console.log(country.toLowerCase());
console.log(country.slice(7, 14));
console.log(country.includes("United"));
console.log(country.includes("u")); //case sensitive
console.log(country.toLowerCase().includes("u"));
console.log(country.toLowerCase().includes("U"));



//google replace, charAt, splice
//exe-s
function addFullStop(params){
  return params.concat (".");
}

console.log(addFullStop("Hello World"));

function capitalize (paramA) {
  if(typeof(paramA) === "string"){
    const capit = paramA.toLowerCase();
    const charCap = capit.charAt(0).toUpperCase() + capit.slice(1);

    console.log("first step " + charCap);
    return charCap;

  } else {
    return "this is not a string";
  }
}

console.log(capitalize("i should BE capitalized"));

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));

//arrow func and scope

var globalVar = "Glob Var";

function substract(a, b) {
  var funct1Var = "Func 1 var";
  console.log(globalVar);
  console.log(funct1Var);
  return a-b
}
console.log(substract(10, 5));

const substract1 = (a, b) => a-b;
console.log(substract1(15, 5));

function addition() {
  var funcLa = "Func la";
for (let index = 0; index < 3; index++) {
  const blockVar = "blockVar";
  console.log(funcLa);
}
  
  console.log(globalVar);
  console.log(funcLa);
}
console.log(addition());

//google scope











