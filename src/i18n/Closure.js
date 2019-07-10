export default {
  title: "Closures in Javascript",
  definition:
    "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
  placesUsed: ["Data Privacy to emulate private methods", ""],
  snippet: [
    `function init() { 
      var name = 'Mozilla'; // name is a local variable created by init function 
      displayName() { // displayName() is the inner function, a closure 
         alert(name); // use variable declared in the parent function 
      } 
      displayName(); 
    } 
    init();`,
    `
    var counter = (function() { 
      var privateCounter = 0; 
      function changeBy(val) { 
        privateCounter += val; } 
        return { 
           increment: function() { 
             changeBy(1); 
            }, 
            decrement: function() { 
             changeBy(-1); 
            }, 
            value: function() { 
             return privateCounter;
            } 
           };
         })(); 
        console.log(counter.value()); // logs 0
        counter.increment();
        counter.increment();
        console.log(counter.value()); // logs 2 
        counter.decrement();
        console.log(counter.value()); // logs 1
    `
  ],
  referenceLinks: [
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
      text: "Closures - JavaScript | MDN "
    },
    {
      text: "Master the JavaScript Interview: What is a Closure",
      href:
        "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36"
    }
  ]
};
