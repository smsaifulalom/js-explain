export default function HoistingGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">1.9 Hoisting</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is Hoisting?</h3>
        <p>
          <span className="font-semibold">Hoisting</span> is JavaScript’s
          default behavior of moving declarations (variables, functions,
          classes) to the top of their scope before code execution. This means
          you can use certain variables and functions before they are declared
          in the code.
          <br />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Reference: W3Schools, Programiz, DigitalOcean, MDN
          </span>
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          How Variable Hoisting Works
        </h3>
        <ul className="list-disc list-inside mb-2">
          <li>
            <span className="font-semibold">var</span>: Declarations are hoisted
            and initialized to <code>undefined</code>. Assignments are{" "}
            <span className="font-semibold">not</span> hoisted.
          </li>
          <li>
            <span className="font-semibold">let</span> and{" "}
            <span className="font-semibold">const</span>: Declarations are
            hoisted but <span className="font-semibold">not initialized</span>.
            Accessing them before declaration causes a{" "}
            <code>ReferenceError</code> due to the{" "}
            <span className="font-semibold">temporal dead zone</span>.<br />
            <span className="text-sm text-gray-600 dark:text-gray-400"></span>
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;

console.log(c); // ReferenceError
const c = 15;`}</code>
        </pre>
        <p>
          <span className="font-semibold">Note:</span> Only declarations are
          hoisted, not initializations. For <code>var</code>, the variable
          exists before the assignment (as undefined). For <code>let</code> and{" "}
          <code>const</code>, accessing before declaration throws an error.
          <br />
          <span className="text-sm text-gray-600 dark:text-gray-400"></span>
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          How Function Hoisting Works
        </h3>
        <ul className="list-disc list-inside mb-2">
          <li>
            <span className="font-semibold">Function Declarations</span> are
            fully hoisted. You can call them before they appear in the code.
          </li>
          <li>
            <span className="font-semibold">Function Expressions</span>{" "}
            (including arrow functions) are{" "}
            <span className="font-semibold">not</span> hoisted as functions.
            Only the variable is hoisted (as <code>undefined</code> for{" "}
            <code>var</code>).
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`console.log(greet()); // "Hello!"
function greet() {
  return "Hello!";
}

console.log(add); // undefined
var add = function(a, b) {
  return a + b;
};

console.log(multiply); // ReferenceError
let multiply = (a, b) => a * b;`}</code>
        </pre>
        <p>
          <span className="font-semibold">Note:</span> Only function
          declarations are hoisted with their implementation. Function
          expressions and arrow functions are not.
          <br />
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Summary Table</h3>
        <table className="table-auto w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b p-2">Type</th>
              <th className="border-b p-2">Hoisted?</th>
              <th className="border-b p-2">Initialized?</th>
              <th className="border-b p-2">Can use before declaration?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">var</td>
              <td className="p-2">Yes</td>
              <td className="p-2">Yes (undefined)</td>
              <td className="p-2">Yes (undefined)</td>
            </tr>
            <tr>
              <td className="p-2">let / const</td>
              <td className="p-2">Yes</td>
              <td className="p-2">No</td>
              <td className="p-2">No (ReferenceError)</td>
            </tr>
            <tr>
              <td className="p-2">Function Declaration</td>
              <td className="p-2">Yes</td>
              <td className="p-2">Yes (full function)</td>
              <td className="p-2">Yes</td>
            </tr>
            <tr>
              <td className="p-2">Function Expression / Arrow Function</td>
              <td className="p-2">Variable only</td>
              <td className="p-2">No</td>
              <td className="p-2">No (undefined or ReferenceError)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`console.log(x);
var x = 7;

console.log(y);
let y = 8;

foo();
function foo() {
  console.log("bar");
}

console.log(bar);
var bar = function() {
  console.log("baz");
};`}</code>
        </pre>
      </section>
    </div>
  );
}
