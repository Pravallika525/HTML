//1. Write an arrow function that takes two parameters, a and b, and returns their sum.
const sum = (a, b) => a + b;
console.log(sum(5, 10)); 

//2. Create an arrow function that takes a single parameter name and returns a greeting message: “Hello, {name}!”
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Pravallika"));

//3. Write an arrow function that checks if a number is even and returns true if it is, or false otherwise.
 const isGreaterThanTen = (num) => num > 10;
 console.log(isGreaterThanTen(5));   
// console.log(isGreaterThanTen(15))

//4.  Write an arrow function that accepts a number and returns true if the number is greater than 10, or false otherwise.
const isgreaterThanTen = (num) => {
      if (num > 10) {
    return true;
  } else {
    return false;
  }


};
console.log(isgreaterThanTen(8));   
console.log(isGreaterThanTen(15));  


//5. Create an arrow function that takes two strings, compares their lengths, and returns the longer string. If both have the same length, return “Equal length.
  const compareStrings = (str1, str2) => {
  if (str1.length > str2.length) {
    return str1;
  } else if (str2.length > str1.length) {
    return str2;
  } else {
    return "Equal length.";
  }
};
console.log(compareStrings("apple", "banana")); 
console.log(compareStrings("cat", "dog"));      