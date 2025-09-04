// 1.Basic Callback Execution
// Write a function called processNumber that accepts a number and a callback function. The processNumber function should double the number and pass the result to the callback function.
function processNumber(number, callback) {
  const doubled = number * 2;
  callback(doubled);
}
processNumber(4, function(result) {
  console.log("Doubled number:", result);
});
// 2.Callback with Array Iteration
// write a function called forEachElement that takes an array and a callback function. The function should iterate over the array and execute the callback function for each element, passing the element as an argument.
function forEachElement(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
forEachElement([1, 2, 3], function(element) {
  console.log("Element:", element);
});

// 3.Simple Delayed Callback
//Write a function sayHello that accepts a name and a callback function. Use setTimeout to wait for 1 second and then call the callback function, passing the message "Hello, [name]!" (replace [name] with the provided name).
function sayHello(name, callback) {
  setTimeout(function() {
    const message = `Hello, ${name}!`;
    callback(message);
  }, 1000);
}
sayHello("Alice", function(greeting) {
  console.log(greeting); 
});

// 4.Callback on Condition
//Write a function checkEven that accepts a number and two callback functions. If the number is even, call the first callback with the number. If the number is odd, call the second callback with the number.
function checkEven(number, evenCallback, oddCallback) {
  if (number % 2 === 0) {
    evenCallback(number);
  } else {
    oddCallback(number);
  }
}
checkEven(10,
  function(num) { console.log(num + " is even."); },
  function(num) { console.log(num + " is odd."); }
);

// 5.Sequential Callbacks
//Write a function performTasks that accepts a number and two callback functions. First, add 5 to the number using the first callback, and then multiply the result by 2 using the second callback. Log the final result to the console.
function performTasks(number, addFiveCallback, multiplyCallback) {
  const added = addFiveCallback(number);   
  const result = multiplyCallback(added);    
  console.log("Final result:", result);    
}
performTasks(5,
  function(num) { return num + 5; },          
  function(num) { return num * 2; }  
);
