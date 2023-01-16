//JavaScript interpreter tries to interpret the given values as numbers, 
//or convert them into numbers. So if the character strings consists of digits, 
//the automatic conversion will be successful and we will get the result of the arithmetic 
//action as a Number type value. If the character string cannot be interpreted as a number 
//(and converted) we will get the NaN result.

let testy = "100" - "10";
console.log(testy);
console.log(typeof testy);

//The exception is the addition operation, which will not be treated as an arithmetic one, 
//but as an attempt to create a new string by combining two input strings.

let path = "C:\\" + "Windows";
console.log(path);
let path2 = "C:\\ Windows" - "Windows";
console.log(path2);

//string interpolation. It allows you to treat a character string as a template, 
//in which you can place values in selected places, such as those taken from variables. 
//Such a literal is created using backticks (or grave accents) instead of quotation marks. 
//The places where values are inserted are marked with curly brackets preceded by a $ sign.

let country = 'Malawi';
let continent = 'Afrca';

let sentence = ` ${country} is located in ${continent}.`; //Use backtick NOT apostraphy.
console.log(sentence);
