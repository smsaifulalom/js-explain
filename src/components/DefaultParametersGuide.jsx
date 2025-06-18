export default function DefaultParametersGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        3.5 Default Parameters in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What Are Default Parameters?
        </h3>
        <p>
          <span className="font-semibold">Default parameters</span> allow you to
          assign default values to function parameters. If no value or{" "}
          <code>undefined</code> is passed for that parameter, the default value
          is used instead. This feature, introduced in ES6, makes functions more
          robust and concise, especially when dealing with optional arguments.
          <br />
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Syntax</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function myFunction(param1 = defaultValue1, param2 = defaultValue2) {
  // function body
}`}</code>
        </pre>
        <p>
          The default value is used only if the argument is{" "}
          <code>undefined</code> or omitted. Passing <code>null</code> will{" "}
          <span className="font-semibold">not</span> trigger the default.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Basic Example</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5));    // 5 (b uses default value 1)
console.log(multiply(5, undefined)); // 5 (b uses default value 1)
console.log(multiply(5, null)); // 0 (null is passed, not undefined)`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            If <code>b</code> is omitted or <code>undefined</code>, it defaults
            to <code>1</code>.
          </li>
          <li>
            If <code>null</code> is passed, <code>b</code> is <code>null</code>{" "}
            (not defaulted).
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Multiple Parameters & Dynamic Defaults
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function sum(x = 3, y = 5) {
  return x + y;
}
console.log(sum(5, 15)); // 20
console.log(sum(7));     // 12 (y uses default 5)
console.log(sum());      // 8  (x=3, y=5)

function calc(x = 1, y = x, z = x + y) {
  return x + y + z;
}
console.log(calc()); // 4 (x=1, y=1, z=2)
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Defaults can refer to previous parameters.</li>
          <li>Defaults can be any expression, including function calls.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Default Parameters with Arrow Functions
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const greet = (name = "Guest") => \`Hello, \${name}!\`;
console.log(greet()); // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Old vs. New: Setting Defaults
        </h3>
        <p>Before ES6, you had to set defaults inside the function body:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}`}</code>
        </pre>
        <p>With ES6, this is much cleaner and less error-prone:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function multiply(a, b = 1) {
  return a * b;
}`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
        <ul className="list-disc list-inside">
          <li>Use default parameters for optional arguments.</li>
          <li>
            Remember: <code>null</code> does NOT trigger the default value, only{" "}
            <code>undefined</code> or omission does.
          </li>
          <li>
            Default parameters can be any expression, including function calls
            or other parameter values.
          </li>
          <li>
            Use default parameters with arrow functions and class constructors
            for cleaner code.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function greet(name = "Guest", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}
console.log(greet());
console.log(greet("Sam"));
console.log(greet("Sam", "Hi"));
console.log(greet(undefined, "Welcome"));
console.log(greet(null, "Hey"));`}</code>
        </pre>
      </section>
    </div>
  );
}
