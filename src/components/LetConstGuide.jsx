export default function LetConstGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        3.1 <code>let</code> and <code>const</code> in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What are <code>let</code> and <code>const</code>?
        </h3>
        <p>
          <code>let</code> and <code>const</code> are two modern ways to declare
          variables in JavaScript, introduced in ES6 (ECMAScript 2015). They are
          block-scoped and provide better control and safety compared to the
          older <code>var</code> keyword.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">let</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Block-scoped:</span> The variable is
            only accessible within the block (<code>{"{}"}</code>) where it is
            declared.
          </li>
          <li>
            <span className="font-semibold">Can be reassigned:</span> You can
            change its value later.
          </li>
          <li>
            <span className="font-semibold">
              Not hoisted (in the usual sense):
            </span>{" "}
            Accessing before declaration gives a <code>ReferenceError</code>{" "}
            (because of the "temporal dead zone").
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`let count = 1;
count = 2; // OK
if (true) {
  let count = 5;
  console.log(count); // 5 (block scope)
}
console.log(count); // 2 (outer scope)
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">const</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Block-scoped:</span> Like{" "}
            <code>let</code>, only accessible within the block where declared.
          </li>
          <li>
            <span className="font-semibold">Must be initialized:</span> You must
            assign a value at the time of declaration.
          </li>
          <li>
            <span className="font-semibold">Cannot be reassigned:</span> The
            variable identifier cannot be changed to reference a new value.
          </li>
          <li>
            <span className="font-semibold">Not immutable:</span> If the value
            is an object or array, its contents{" "}
            <span className="font-semibold">can</span> be changed (the reference
            cannot).
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const name = "Alice";
// name = "Bob"; // Error: Assignment to constant variable

const user = { age: 25 };
user.age = 26; // OK: object properties can change
console.log(user); // { age: 26 }
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">let vs. const vs. var</h3>
        <table className="table-auto w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b p-2">Feature</th>
              <th className="border-b p-2">let</th>
              <th className="border-b p-2">const</th>
              <th className="border-b p-2">var</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Scope</td>
              <td className="p-2">Block</td>
              <td className="p-2">Block</td>
              <td className="p-2">Function</td>
            </tr>
            <tr>
              <td className="p-2">Hoisting</td>
              <td className="p-2">Yes (TDZ)</td>
              <td className="p-2">Yes (TDZ)</td>
              <td className="p-2">Yes (initialized as undefined)</td>
            </tr>
            <tr>
              <td className="p-2">Reassignment</td>
              <td className="p-2">Yes</td>
              <td className="p-2">No</td>
              <td className="p-2">Yes</td>
            </tr>
            <tr>
              <td className="p-2">Redeclaration</td>
              <td className="p-2">No</td>
              <td className="p-2">No</td>
              <td className="p-2">Yes</td>
            </tr>
            <tr>
              <td className="p-2">Initialization required?</td>
              <td className="p-2">No</td>
              <td className="p-2">Yes</td>
              <td className="p-2">No</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
        <ul className="list-disc list-inside">
          <li>
            Use <code>const</code> by default for variables that shouldn't be
            reassigned.
          </li>
          <li>
            Use <code>let</code> when you know the variable's value will change.
          </li>
          <li>
            Avoid <code>var</code> in modern JavaScript—it's error-prone and
            harder to reason about.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`let a = 10;
if (true) {
  let a = 20;
  const b = 30;
  // b = 40; // Uncommenting this line would cause an error
  console.log(a, b);
}
console.log(a);
// console.log(b); // Uncommenting this line would cause an error`}</code>
        </pre>
      </section>
    </div>
  );
}
