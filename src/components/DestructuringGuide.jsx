export default function DestructuringGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        3.3 Destructuring (Arrays &amp; Objects) in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is Destructuring?</h3>
        <p>
          <span className="font-semibold">Destructuring</span> is a JavaScript
          syntax that allows you to unpack values from arrays or properties from
          objects into distinct variables. It makes your code cleaner, more
          readable, and helps reduce redundancy when working with complex data
          structures.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Destructuring can be used in variable assignments, function
            parameters, loops, and more.
          </li>
          <li>
            It supports default values, skipping items, rest syntax, and nested
            patterns.
            <br />
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Array Destructuring</h3>
        <p>
          Extract values from arrays and assign them to variables in a single
          line.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const fruits = ['apple', 'banana', 'orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1); // "apple"
console.log(fruit2); // "banana"
console.log(fruit3); // "orange"

// Skipping elements
const [first, , third] = fruits;
console.log(third); // "orange"

// Default values
const colors = ['red'];
const [color1, color2 = 'blue'] = colors;
console.log(color2); // "blue"

// Using rest syntax
const numbers = [10, 20, 30, 40];
const [a, ...rest] = numbers;
console.log(a);    // 10
console.log(rest); // [20, 30, 40]

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1
`}</code>
        </pre>
        <p>
          Array destructuring works with any iterable, not just arrays (e.g.,
          strings, sets, maps).
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Object Destructuring</h3>
        <p>
          Extract properties from objects and assign them to variables. The
          variable names must match the property names unless you use aliases.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const person = { firstName: "John", lastName: "Doe", age: 30 };
const { firstName, age } = person;
console.log(firstName); // "John"
console.log(age);       // 30

// Aliases
const { firstName: fName, lastName: lName } = person;
console.log(fName, lName); // "John" "Doe"

// Default values
const { country = "US" } = person;
console.log(country); // "US"

// Rest syntax
const { firstName: name, ...others } = person;
console.log(name);    // "John"
console.log(others);  // { lastName: "Doe", age: 30 }
`}</code>
        </pre>
        <p>
          The order does not matter for object destructuring, and you can
          destructure nested objects too.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Destructuring in Function Parameters
        </h3>
        <p>
          Destructuring is especially useful for extracting values directly in
          function parameters, making your function signatures clearer and more
          concise.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function showUser({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}
const user = { name: "Alice", age: 25, city: "Dhaka" };
showUser(user); // "Alice is 25 years old"

// Array destructuring in parameters
function sum([a, b]) {
  return a + b;
}
console.log(sum([5, 7])); // 12
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Advanced Patterns & Best Practices
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Destructure deeply nested objects and arrays as needed, but avoid
            over-complicating for readability.
          </li>
          <li>
            Use default values to prevent <code>undefined</code> errors.
          </li>
          <li>
            Be careful with variable names and aliases to avoid conflicts.
          </li>
          <li>
            Destructuring does not modify the original array or object[4][5].
          </li>
          <li>
            Rest syntax (<code>...rest</code>) gathers remaining items into a
            new array or object.
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Nested destructuring
const vehicle = {
  brand: 'Ford',
  model: 'Mustang',
  specs: { hp: 450, color: 'red' }
};
const { specs: { hp, color } } = vehicle;
console.log(hp, color); // 450 "red"

// Combined array/object destructuring
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];
const [, , { name }] = props;
console.log(name); // "FizzBuzz"
`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const arr = [1, 2, 3, 4];
const [first, , third, ...rest] = arr;
console.log(first);
console.log(third);
console.log(rest);

const obj = { a: 10, b: 20, c: 30 };
const { a, ...others } = obj;
console.log(a);
console.log(others);`}</code>
        </pre>
      </section>
    </div>
  );
}
