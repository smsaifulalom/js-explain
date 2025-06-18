export default function StrictModeGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        1.13 Strict Mode in JavaScript (<code>"use strict"</code>)
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is Strict Mode?</h3>
        <p>
          <span className="font-semibold">Strict mode</span> is a way to opt in
          to a restricted variant of JavaScript. It helps you write safer,
          cleaner code by catching common coding mistakes and "unsafe" actions.
        </p>
        <ul className="list-disc list-inside">
          <li>Introduced in ECMAScript 5 (ES5).</li>
          <li>
            Enforced by adding <code>"use strict";</code> at the top of a script
            or function.
          </li>
          <li>Eliminates some silent errors and throws exceptions instead.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          How to Enable Strict Mode
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`"use strict";
function myFunction() {
  // strict mode is enabled in this function
}`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            If placed at the top of a file, it applies to the entire script.
          </li>
          <li>
            If placed inside a function, it applies only to that function.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What Does Strict Mode Do?
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">
              Prevents the use of undeclared variables:
            </span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`"use strict";
x = 10; // ReferenceError: x is not defined`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">
              Makes assignments to non-writable properties throw errors:
            </span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`"use strict";
const obj = {};
Object.defineProperty(obj, "y", { value: 1, writable: false });
obj.y = 2; // TypeError: Cannot assign to read only property 'y'`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">
              Prevents deleting undeletable properties:
            </span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`"use strict";
delete Object.prototype; // TypeError`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">
              Disallows duplicate parameter names in functions:
            </span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`"use strict";
function f(a, a) {} // SyntaxError`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">
              Prevents <code>this</code> from defaulting to the global object in
              functions:
            </span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`"use strict";
function show() {
  console.log(this); // undefined, not window
}
show();`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Why Use Strict Mode?</h3>
        <ul className="list-disc list-inside">
          <li>Catches common coding mistakes early.</li>
          <li>Makes debugging easier.</li>
          <li>Prepares code for future versions of JavaScript.</li>
          <li>Prevents some unsafe actions and silent errors.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`"use strict";
function demo() {
  undeclaredVar = 5;
  console.log(undeclaredVar);
}
demo();`}</code>
        </pre>
      </section>
    </div>
  );
}
