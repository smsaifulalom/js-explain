export default function SpreadRestGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        3.6 Spread and Rest Operators (<code>...</code>) in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What Are Spread and Rest Operators?
        </h3>
        <p>
          The <span className="font-semibold">spread operator</span> (
          <code>...</code>) and the{" "}
          <span className="font-semibold">rest operator</span> (<code>...</code>
          ) both use the same syntax but serve different purposes depending on
          where they’re used.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Spread:</span> Expands (spreads)
            elements of an array or properties of an object into individual
            elements/properties.
          </li>
          <li>
            <span className="font-semibold">Rest:</span> Collects multiple
            elements or properties into a single array or object.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Spread Operator</h3>
        <p>
          Use <code>...</code> to "spread" elements of an array, string, or
          object into another array/object or function arguments.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5]

// Spread in function calls
function sum(a, b, c) {
  return a + b + c;
}
const nums = [10, 20, 30];
console.log(sum(...nums)); // 60

// Spread in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Order matters: later properties overwrite earlier ones when
            spreading objects.
          </li>
          <li>Spread can be used to clone arrays/objects (shallow copy).</li>
          <li>Works with any iterable (arrays, strings, sets, maps).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Rest Operator</h3>
        <p>
          Use <code>...</code> in function parameter lists or destructuring to
          "gather" multiple elements into a single array or object.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Rest in function parameters
function logAll(first, ...others) {
  console.log(first);
  console.log(others);
}
logAll(1, 2, 3, 4); // 1, [2, 3, 4]

// Rest in array destructuring
const [a, ...rest] = [10, 20, 30, 40];
console.log(a);    // 10
console.log(rest); // [20, 30, 40]

// Rest in object destructuring
const { x, ...props } = { x: 1, y: 2, z: 3 };
console.log(x);    // 1
console.log(props); // { y: 2, z: 3 }
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Rest must be the last parameter in a function or destructuring
            pattern.
          </li>
          <li>Rest collects all remaining elements/properties.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Spread vs. Rest: Key Differences
        </h3>
        <table className="table-auto w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b p-2">Operator</th>
              <th className="border-b p-2">Use Case</th>
              <th className="border-b p-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Spread</td>
              <td className="p-2">Expanding</td>
              <td className="p-2">{`sum(...[1,2,3])`}</td>
            </tr>
            <tr>
              <td className="p-2">Rest</td>
              <td className="p-2">Collecting</td>
              <td className="p-2">{`function f(...args) {}`}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Common Use Cases</h3>
        <ul className="list-disc list-inside">
          <li>Merging arrays or objects</li>
          <li>Cloning arrays or objects (shallow copy)</li>
          <li>Passing variable arguments to functions</li>
          <li>
            Destructuring arrays/objects for easy access to remaining items
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const arr = [1, 2, 3];
const copy = [...arr]; // clone array

const obj = { a: 1, b: 2 };
const copyObj = { ...obj }; // clone object

function max(...nums) {
  return Math.max(...nums);
}
console.log(max(5, 10, 15)); // 15
`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function printAll(...args) {
  console.log(args.length);
  console.log(args[0]);
  console.log([...args, 100]);
}
printAll(1, 2, 3);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);`}</code>
        </pre>
      </section>
    </div>
  );
}
