export default function TruthyFalsyGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        1.16 Truthy and Falsy Values in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What are Truthy and Falsy Values?
        </h3>
        <p>
          In JavaScript, every value is either{" "}
          <span className="font-semibold">truthy</span> or{" "}
          <span className="font-semibold">falsy</span> when evaluated in a
          boolean context (such as an <code>if</code> statement or logical
          operation).
        </p>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Truthy:</span> Values that evaluate
            to <code>true</code> in a boolean context.
          </li>
          <li>
            <span className="font-semibold">Falsy:</span> Values that evaluate
            to <code>false</code> in a boolean context.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Falsy Values (only 7 in JavaScript)
        </h3>
        <ul className="list-disc list-inside">
          <li>
            <code>false</code>
          </li>
          <li>
            <code>0</code> and <code>-0</code>
          </li>
          <li>
            <code>0n</code> (BigInt zero)
          </li>
          <li>
            <code>""</code> (empty string)
          </li>
          <li>
            <code>null</code>
          </li>
          <li>
            <code>undefined</code>
          </li>
          <li>
            <code>NaN</code>
          </li>
        </ul>
        <p>
          <span className="font-semibold">Everything else is truthy!</span>
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Examples of Truthy Values
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Non-empty strings: <code>"hello"</code>
          </li>
          <li>
            Non-zero numbers: <code>42</code>, <code>-7</code>
          </li>
          <li>
            Objects and arrays: <code>{"{}"}</code>, <code>{"[]"}</code>
          </li>
          <li>
            <code>Infinity</code> and <code>-Infinity</code>
          </li>
          <li>Functions</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Checking for Truthy or Falsy
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`if ("hello") {
  console.log("This is truthy!");
}
if (0) {
  console.log("This won't print, 0 is falsy.");
}
if ([]) {
  console.log("Empty array is truthy!");
}
if ("") {
  console.log("This won't print, empty string is falsy.");
}`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Boolean Conversion</h3>
        <p>
          Use <code>Boolean(value)</code> or <code>!!value</code> to explicitly
          convert a value to <code>true</code> or <code>false</code>:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`console.log(Boolean(""));    // false
console.log(Boolean("hi"));  // true
console.log(Boolean(0));     // false
console.log(Boolean(123));   // true
console.log(Boolean(null));  // false
console.log(Boolean({}));    // true`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean("0"));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(null));`}</code>
        </pre>
      </section>
    </div>
  );
}
