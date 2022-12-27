//JavaScript interpreter tries to interpret the given values as numbers, 
//or convert them into numbers. So if the character strings consists of digits, 
//the automatic conversion will be successful and we will get the result of the arithmetic 
//action as a Number type value. If the character string cannot be interpreted as a number 
//(and converted) we will get the NaN result.

let testy = "100" - "10";
console.log(testy);

//The exception is the addition operation, which will not be treated as an arithmetic one, 
//but as an attempt to create a new string by combining two input strings.

let path = "C:\\" + "Windows";
console.log(path);

let test = '100' + '10';
console.log(test);
console.log(typeof test);