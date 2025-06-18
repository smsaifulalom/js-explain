export default function JSONGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        1.14 JSON in JavaScript (<code>JSON.parse</code> /{" "}
        <code>JSON.stringify</code>)
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is JSON?</h3>
        <p>
          <span className="font-semibold">JSON</span> (JavaScript Object
          Notation) is a lightweight data-interchange format. It is easy for
          humans to read and write, and easy for machines to parse and generate.
        </p>
        <ul className="list-disc list-inside">
          <li>Used for exchanging data between a client and a server.</li>
          <li>
            Data is always in <span className="font-semibold">string</span>{" "}
            format.
          </li>
          <li>
            JSON supports objects, arrays, numbers, strings, booleans, and null.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Converting Objects to JSON (<code>JSON.stringify</code>)
        </h3>
        <p>
          Use <code>JSON.stringify()</code> to convert a JavaScript object or
          array to a JSON string.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`const obj = { name: "Alice", age: 25 };
const jsonStr = JSON.stringify(obj);
console.log(jsonStr); // '{"name":"Alice","age":25}'`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Useful for sending data to a server or storing in localStorage.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Converting JSON to Objects (<code>JSON.parse</code>)
        </h3>
        <p>
          Use <code>JSON.parse()</code> to convert a JSON string back into a
          JavaScript object or array.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`const jsonStr = '{"name":"Alice","age":25}';
const obj = JSON.parse(jsonStr);
console.log(obj.name); // "Alice"
console.log(obj.age);  // 25`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Useful for reading data from a server or localStorage.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Limitations of JSON</h3>
        <ul className="list-disc list-inside">
          <li>
            JSON does not support functions, <code>undefined</code>, or special
            object types like <code>Date</code>, <code>Map</code>,{" "}
            <code>Set</code>, etc.
          </li>
          <li>All keys must be strings (in double quotes).</li>
          <li>
            Circular references in objects will cause{" "}
            <code>JSON.stringify</code> to throw an error.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Pretty Printing JSON</h3>
        <p>
          You can format JSON strings for readability by passing extra arguments
          to <code>JSON.stringify</code>:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`const obj = { name: "Alice", age: 25 };
console.log(JSON.stringify(obj, null, 2));
/* Output:
{
  "name": "Alice",
  "age": 25
}
*/`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const user = {
  name: "Sam",
  age: 30,
  greet: function() {
    return "Hello!";
  }
};
const json = JSON.stringify(user);
console.log(json);

const parsed = JSON.parse(json);
console.log(parsed.greet);`}</code>
        </pre>
      </section>
    </div>
  );
}
