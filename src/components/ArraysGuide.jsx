import React from "react";

export default function ArraysGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">1.5 Arrays</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is an Array?</h3>
        <p>
          An <span className="font-semibold">array</span> is an ordered collection of values. Arrays can store elements of any type—numbers, strings, objects, other arrays, or even functions. Arrays are zero-indexed, meaning the first element is at index <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">0</code>.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Creating Arrays</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Using array literal
const fruits = ["apple", "banana", "cherry"];

// Using Array constructor
const numbers = new Array(1, 2, 3, 4);`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Accessing and Modifying Elements</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`console.log(fruits[0]); // "apple"
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Common Array Methods (with Examples)</h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <span className="font-semibold">push()</span>: Adds one or more elements to the end of the array.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">pop()</span>: Removes the last element and returns it.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const arr = [1, 2, 3];
const last = arr.pop();
console.log(last); // 3
console.log(arr); // [1, 2]`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">shift()</span>: Removes the first element and returns it.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const arr = [1, 2, 3];
const first = arr.shift();
console.log(first); // 1
console.log(arr); // [2, 3]`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">unshift()</span>: Adds one or more elements to the beginning of the array.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">slice()</span>: Returns a shallow copy of a portion of the array (does not modify the original).
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const arr = [1, 2, 3, 4];
const sliced = arr.slice(1, 3);
console.log(sliced); // [2, 3]
console.log(arr);    // [1, 2, 3, 4]`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">splice()</span>: Adds/removes elements at a specific index (modifies the original array).
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const arr = [1, 2, 3, 4];
arr.splice(1, 2, 9, 8);
console.log(arr); // [1, 9, 8, 4]`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">forEach()</span>: Executes a function on each element (does not return a new array).
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const arr = [1, 2, 3];
arr.forEach(num => console.log(num * 2)); // Logs: 2, 4, 6`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">map()</span>: Creates a new array by transforming each element.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const arr = [1, 2, 3];
const doubled = arr.map(num => num * 2);
console.log(doubled); // [2, 4, 6]`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Other Useful Methods</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><span className="font-semibold">filter()</span>: Returns a new array with elements that pass a test.</li>
          <li><span className="font-semibold">find()</span>: Returns the first element that passes a test.</li>
          <li><span className="font-semibold">includes()</span>: Checks if an array contains a value.</li>
          <li><span className="font-semibold">reduce()</span>: Reduces the array to a single value.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const arr = [10, 20, 30];
arr.push(40);
arr.shift();
console.log(arr);
arr.splice(1, 1, 50, 60);
console.log(arr);`}</code>
        </pre>
      </section>
    </div>
  );
} 