import React from "react";

export default function MapSetGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">3.11 Map and Set Objects in JavaScript</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is a Map?</h3>
        <p>
          A <span className="font-semibold">Map</span> is a built-in JavaScript object that holds key-value pairs where <strong>keys can be any datatype</strong> (including objects or functions). Maps remember the original insertion order of the keys and provide efficient methods for adding, retrieving, updating, and deleting entries.<br />
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Creating and Using a Map</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Create a Map with initial values
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Or create an empty Map and add values
const map = new Map();
map.set("name", "John");
map.set("age", 30);

// Retrieve values
console.log(fruits.get("apples")); // 500
console.log(map.get("name"));      // "John"

// Update values
fruits.set("apples", 200);

// Check for existence
console.log(fruits.has("bananas")); // true

// Remove a key
map.delete("age");

// Iterate over a Map
fruits.forEach((value, key) => {
  console.log(key, value);
});
// Output:
// apples 200
// bananas 300
// oranges 200
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li><code>set(key, value)</code>: Add or update an entry.</li>
          <li><code>get(key)</code>: Retrieve the value for a given key.</li>
          <li><code>has(key)</code>: Check if a key exists.</li>
          <li><code>delete(key)</code>: Remove an entry by key.</li>
          <li><code>clear()</code>: Remove all entries.</li>
          <li><code>size</code>: Number of entries in the Map.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is a Set?</h3>
        <p>
          A <span className="font-semibold">Set</span> is a built-in JavaScript object for storing <strong>unique values</strong> of any type, whether primitive or object references. Sets automatically ignore duplicate values and are useful for collections where uniqueness matters.<br />
          <span className="text-sm text-gray-600 dark:text-gray-400">[2][3][5]</span>
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Creating and Using a Set</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Create a Set with initial values (duplicates are ignored)
const nums = new Set([1, 2, 3, 3]);
console.log(nums); // Set {1, 2, 3}

// Create an empty Set and add values
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate, will not be added

// Check for existence
console.log(set.has(1)); // true

// Remove a value
set.delete(2);

// Get the size
console.log(set.size); // 1

// Iterate over a Set
set.add(3);
set.forEach(value => {
  console.log(value);
});
// Output: 1, 3

// Clear all values
set.clear();
console.log(set.size); // 0
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li><code>add(value)</code>: Add a value (if not already present).</li>
          <li><code>has(value)</code>: Check if a value exists.</li>
          <li><code>delete(value)</code>: Remove a value.</li>
          <li><code>clear()</code>: Remove all values.</li>
          <li><code>size</code>: Number of unique values in the Set.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Map vs. Object and Set vs. Array</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Map vs. Object:</span> Maps allow any data type as keys, remember insertion order, and have built-in methods for iteration and manipulation. Objects only allow strings/symbols as keys and are not ordered.
          </li>
          <li>
            <span className="font-semibold">Set vs. Array:</span> Sets only store unique values and have fast existence checks, while arrays can have duplicates and require manual checks for uniqueness.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("a", 3);
console.log(myMap.get("a"));
console.log(myMap.size);

const mySet = new Set([1, 2, 2, 3]);
mySet.add(3);
mySet.add(4);
console.log(mySet.has(2));
console.log(mySet.size);
mySet.delete(1);
console.log([...mySet]);`}</code>
        </pre>
      </section>
    </div>
  );
}
