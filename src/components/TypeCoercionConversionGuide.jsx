export default function TypeCoercionConversionGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        1.15 Type Coercion and Conversion in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What is Type Coercion and Conversion?
        </h3>
        <p>
          <span className="font-semibold">Type conversion</span> in JavaScript
          is the process of converting a value from one data type to another.
          This can happen <span className="font-semibold">implicitly</span>{" "}
          (automatically by JavaScript, called{" "}
          <span className="font-semibold">type coercion</span>) or{" "}
          <span className="font-semibold">explicitly</span> (manually by the
          programmer).
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Implicit Type Conversion (Coercion)
        </h3>
        <p>
          JavaScript automatically converts types when performing operations
          involving different types. For example, using the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">+</code>{" "}
          operator with a string and a number will convert the number to a
          string and concatenate.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`"100" + 24; // "10024"
'100' + false; // "100false"
"100" + null; // "100null"
"100" + undefined; // "100undefined"`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Implicit Conversion to Number
        </h3>
        <p>
          When using arithmetic operators other than{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">+</code>,
          JavaScript converts strings and booleans to numbers.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`'100' / 50; // 2
'100' - '50'; // 50
'100' * true; // 100
'100' - false; // 100
'tp' / 50; // NaN`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Implicit Conversion to Boolean
        </h3>
        <p>
          Using the double negation operator{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">!!</code>{" "}
          converts values to their boolean equivalent.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`!!0; // false
!!1; // true
!!""; // false
!!"Hello"; // true`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Explicit Type Conversion</h3>
        <p>
          You can manually convert types using built-in functions like{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
            String()
          </code>
          ,{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
            Number()
          </code>
          , and{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
            Boolean()
          </code>
          .
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`String(100); // "100"
Number("200"); // 200
Boolean(0); // false
Boolean("Hello"); // true`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Special Cases</h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>null</strong> converts to <code>0</code> when converted to a
            number.
          </li>
          <li>
            <strong>undefined</strong> converts to <code>NaN</code> when
            converted to a number.
          </li>
          <li>
            Arrays convert to strings by joining their elements with commas.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`console.log("5" + 3);
console.log("5" - 3);
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);`}</code>
        </pre>
      </section>
    </div>
  );
}
