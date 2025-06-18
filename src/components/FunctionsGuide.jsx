import React from "react";

export default function FunctionsGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">1.4 Functions</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is a Function?</h3>
        <p>
          A <span className="font-semibold">function</span> is a reusable block of code that performs a specific task. Functions help you organize code, avoid repetition, and make your programs modular and maintainable.
        </p>
        <p>
          Functions can accept <span className="font-semibold">parameters</span> (inputs), perform operations, and <span className="font-semibold">return</span> a value.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Function Declaration</h3>
        <p>
          The most common way to define a function is with a <span className="font-semibold">function declaration</span>:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: "Hello, Alice!"
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Hoisted: You can call the function before its definition.</li>
          <li>Can have zero or more parameters.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Function Expression</h3>
        <p>
          A <span className="font-semibold">function expression</span> creates a function and assigns it to a variable. It is not hoisted.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const add = function(a, b) {
  return a + b;
};

console.log(add(3, 4)); // Output: 7
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Function expressions can be named or anonymous.</li>
          <li>Not hoisted: Must be defined before use.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Arrow Functions (ES6+)</h3>
        <p>
          <span className="font-semibold">Arrow functions</span> provide a concise syntax and do <span className="font-semibold">not have their own <code>this</code></span>.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const multiply = (x, y) => x * y;

console.log(multiply(2, 5)); // Output: 10
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Shorter syntax, especially for simple functions.</li>
          <li>Implicit return if no curly braces.</li>
          <li>No own <code>this</code>, <code>arguments</code>, or <code>super</code>.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Parameters, Arguments, and Default Values</h3>
        <p>
          <span className="font-semibold">Parameters</span> are variables listed in the function definition. <span className="font-semibold">Arguments</span> are the actual values passed to the function.
        </p>
        <p>
          You can set <span className="font-semibold">default values</span> for parameters:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function sayHello(name = "Guest") {
  return "Hello, " + name + "!";
}

console.log(sayHello()); // Output: "Hello, Guest!"
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Returning Values</h3>
        <p>
          Functions can return a value using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">return</code> statement. If no return is specified, the function returns <code>undefined</code>.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function square(n) {
  return n * n;
}

console.log(square(6)); // Output: 36
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Function Scope and Closures</h3>
        <p>
          Variables declared inside a function are not accessible outside. Functions can access variables from their outer scope due to <span className="font-semibold">closures</span>.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function outer() {
  let outerVar = "I'm outside!";
  function inner() {
    return outerVar;
  }
  return inner();
}

console.log(outer()); // Output: "I'm outside!"
`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>
          <span className="font-semibold">Write code that:</span>
        </p>
        <ul className="list-decimal list-inside mb-2">
          <li>Defines a function (any style) that takes two numbers and returns their average.</li>
          <li>Defines an arrow function that takes a string and returns the string in uppercase.</li>
          <li>Logs the results of calling both functions with sample inputs.</li>
        </ul>
      </section>
    </div>
  );
} 