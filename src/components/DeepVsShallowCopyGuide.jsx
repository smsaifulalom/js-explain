export default function DeepVsShallowCopyGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        4.5 Deep vs. Shallow Copy in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is a Shallow Copy?</h3>
        <p>
          A <span className="font-semibold">shallow copy</span> creates a new
          object or array and copies the top-level properties or elements from
          the original. For primitive values (numbers, strings, booleans), the
          value is copied. For nested objects or arrays, only the reference is
          copied, not the actual data. This means changes to nested properties
          in the copy will also affect the original, and vice versa.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const original = {
  name: "Alice",
  details: {
    age: 25,
    city: "Wonderland"
  }
};

// Shallow copy
const shallowCopy = { ...original };

// Modify nested object in the shallow copy
shallowCopy.details.city = "Looking Glass";

// Both objects now reflect the change!
console.log(original.details.city); // Output: "Looking Glass"
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Shallow copy methods: <code>{`Object.assign()`}</code>, spread
            operator (<code>{`...`}</code>),{" "}
            <code>Array.prototype.slice()</code>,{" "}
            <code>Array.prototype.concat()</code>.
          </li>
          <li>Efficient for flat or minimally nested structures.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is a Deep Copy?</h3>
        <p>
          A <span className="font-semibold">deep copy</span> recursively copies
          all levels of an object or array, creating entirely new nested objects
          and arrays. The copy is completely independent from the original, so
          changes to nested properties in the copy will not affect the original,
          and vice versa.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const original = {
  name: "Alice",
  details: {
    age: 25,
    city: "Wonderland"
  }
};

// Deep copy using JSON methods (limitations apply!)
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.details.city = "Looking Glass";

// Only the deep copy is changed!
console.log(original.details.city); // Output: "Wonderland"
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Deep copy methods: <code>JSON.parse(JSON.stringify(obj))</code>{" "}
            (cannot handle functions, <code>undefined</code>,{" "}
            <code>Symbol</code>, or circular references), libraries like
            Lodash’s <code>_.cloneDeep()</code>, or custom recursive functions.
          </li>
          <li>
            Best for complex or deeply nested structures where independence is
            required.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Comparison Table</h3>
        <table className="table-auto w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b p-2">Feature</th>
              <th className="border-b p-2">Shallow Copy</th>
              <th className="border-b p-2">Deep Copy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Scope</td>
              <td className="p-2">Top-level only</td>
              <td className="p-2">All levels (recursive)</td>
            </tr>
            <tr>
              <td className="p-2">Nested references</td>
              <td className="p-2">Shared</td>
              <td className="p-2">Independent</td>
            </tr>
            <tr>
              <td className="p-2">Performance</td>
              <td className="p-2">Fast, lightweight</td>
              <td className="p-2">Slower, more memory</td>
            </tr>
            <tr>
              <td className="p-2">Use cases</td>
              <td className="p-2">Flat/simple objects</td>
              <td className="p-2">Nested/complex objects</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Pros and Cons</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Shallow Copy Pros:</span> Fast,
            easy, less memory. <span className="font-semibold">Cons:</span> Not
            safe for nested data—changes to nested objects affect both copies.
          </li>
          <li>
            <span className="font-semibold">Deep Copy Pros:</span> Safe, fully
            independent. <span className="font-semibold">Cons:</span> Slower,
            more memory, can be tricky with complex/circular structures.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
        <ul className="list-disc list-inside">
          <li>
            Use shallow copy for simple, flat structures or when you want to
            maintain references.
          </li>
          <li>
            Use deep copy for complex, deeply nested, or immutable data
            structures where independence is required.
          </li>
          <li>
            Be aware of the limitations of{" "}
            <code>JSON.parse(JSON.stringify(obj))</code> (cannot copy functions,{" "}
            <code>undefined</code>, <code>Symbol</code>, or circular structures).
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const original = {
  name: "Sam",
  info: { age: 30 }
};

const shallow = { ...original };
const deep = JSON.parse(JSON.stringify(original));

shallow.info.age = 40;
console.log(original.info.age);

deep.info.age = 50;
console.log(original.info.age);`}</code>
        </pre>
      </section>
    </div>
  );
}
