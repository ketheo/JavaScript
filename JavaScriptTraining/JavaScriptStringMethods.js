console.time();
console.log("test console");
console.timeEnd(); 

/**
 * @timeEnd;
 * @param
 * /

/** @type
 * 
 */

// Autoboxing: After the operation is completed, the interpreter removes the temporary object. 
//So from our point of view, it looks like we just called a method on a given primitive typ
let river = 'Mekong';
let character = river.charAt(2);
console.log(character)

//slice(beginIndex, [optional] endIndex): method, returns a new string that is created from 
//the characters between beginIndex (included) and endIndex (excluded); 
//if endIndex is omitted, then the new string is from beginIndex to the end of the string;

let name = "Karen Theodosopoulos";
console.log(name.slice(0,5));

//split(separator, [optional] limit): method, splits the string into substrings whenever a 
//separator is found in that string, and returns an array of those substrings
//(we will say a few words about arrays in a moment), while an optional limit limits the number 
//of substrings added to the list.

console.log(name.split('T'));

console.log(typeof name);