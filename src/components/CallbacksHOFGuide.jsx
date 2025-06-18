export default function CallbacksHOFGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        4.2 Callbacks and Higher-Order Functions in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is a Callback?</h3>
        <p>
          A <span className="font-semibold">callback</span> is a function passed
          as an argument to another function, to be "called back" (invoked)
          later by that function. Callbacks are fundamental for controlling the
          sequence of operations, handling asynchronous tasks, and customizing
          behavior.
          <br />
        </p>
        <ul className="list-disc list-inside">
          <li>
            Callbacks can be executed synchronously (immediately) or
            asynchronously (after some time or event).
          </li>
          <li>
            Common in array methods, event handlers, timers, and asynchronous
            APIs.
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function greet(name) {
  console.log("Hello, " + name + "!");
}

function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}

processUserInput(greet); // Output: Hello, Alice!
`}</code>
        </pre>
        <p>
          Here, <code>greet</code> is a callback passed to{" "}
          <code>processUserInput</code>, which calls it with a value.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Synchronous vs. Asynchronous Callbacks
        </h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Synchronous callbacks</span> are
            executed immediately, such as in <code>Array.prototype.map()</code>{" "}
            or <code>forEach()</code>.<br />
          </li>
          <li>
            <span className="font-semibold">Asynchronous callbacks</span> are
            executed later, such as in <code>setTimeout()</code>, event
            listeners, or <code>Promise.then()</code>.<br />
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Synchronous callback
[1, 2, 3].forEach(num => console.log(num * 2)); // 2, 4, 6

// Asynchronous callback
setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What is a Higher-Order Function?
        </h3>
        <p>
          A <span className="font-semibold">higher-order function (HOF)</span>{" "}
          is a function that{" "}
          <strong>
            takes one or more functions as arguments, returns a function, or
            both
          </strong>
          . HOFs are a core concept in functional programming and enable
          powerful abstractions.
          <br />
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// HOF that takes a callback
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log); // 0, 1, 2

// HOF that returns a function
function multiplier(factor) {
  return function(x) {
    return x * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Array methods like <code>map</code>, <code>filter</code>,{" "}
            <code>reduce</code>, <code>sort</code> are built-in higher-order
            functions.
          </li>
          <li>
            HOFs promote code reuse, modularity, and composability.
            <br />
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Callbacks vs. Higher-Order Functions
        </h3>
        <ul className="list-disc list-inside">
          <li>
            The <span className="font-semibold">callback</span> is the function
            being passed in.
            <br />
            The <span className="font-semibold">higher-order function</span> is
            the function that receives (or returns) another function.
            <br />
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function higherOrder(callback) {
  console.log("Starting HOF");
  callback();
}

function greet() {
  console.log("Hello from the callback!");
}

higherOrder(greet);
// Output:
// Starting HOF
// Hello from the callback!
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Practical Examples</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Array methods:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2); // [2, 4, 6, 8, 10]
const evens = nums.filter(n => n % 2 === 0); // [2, 4]
const sum = nums.reduce((acc, n) => acc + n, 0); // 15
`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Timer functions:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`setTimeout(() => console.log("Timeout callback!"), 500);`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">
              Returning functions (function factories):
            </span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`function greetMaker(greeting) {
  return function(name) {
    return greeting + ", " + name + "!";
  };
}
const sayHi = greetMaker("Hi");
console.log(sayHi("Sam")); // "Hi, Sam!"
`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function doTwice(callback) {
  callback();
  callback();
}

function sayHello() {
  console.log("Hello!");
}

doTwice(sayHello);

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
console.log(add5(10));`}</code>
        </pre>
      </section>
    </div>
  );
}
