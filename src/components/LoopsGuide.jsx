import React from "react";

export default function LoopsGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">1.7 Loops</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is a Loop?</h3>
        <p>
          A <span className="font-semibold">loop</span> is a programming construct that repeats a block of code as long as a specified condition is true. JavaScript provides several types of loops to handle different scenarios.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">for Loop</h3>
        <p>
          The <span className="font-semibold">for loop</span> is commonly used when you know how many times you want to iterate.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`for (let i = 0; i < 3; i++) {
  console.log("Iteration:", i);
}
// Output:
// Iteration: 0
// Iteration: 1
// Iteration: 2
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">while Loop</h3>
        <p>
          The <span className="font-semibold">while loop</span> repeats as long as the condition is true. Use it when the number of iterations is not known in advance.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`let count = 0;
while (count < 3) {
  console.log("Count is", count);
  count++;
}
// Output:
// Count is 0
// Count is 1
// Count is 2
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">do...while Loop</h3>
        <p>
          The <span className="font-semibold">do...while loop</span> is similar to the while loop, but it always runs at least once because the condition is checked after the loop body.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`let num = 0;
do {
  console.log("Number:", num);
  num++;
} while (num < 2);
// Output:
// Number: 0
// Number: 1
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">for...of Loop</h3>
        <p>
          The <span className="font-semibold">for...of loop</span> is used to iterate over <span className="font-semibold">iterable objects</span> like arrays, strings, maps, etc.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}
// Output:
// red
// green
// blue
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">for...in Loop</h3>
        <p>
          The <span className="font-semibold">for...in loop</span> iterates over the <span className="font-semibold">enumerable properties</span> (keys) of an object.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`const user = { name: "Ana", age: 25 };
for (const key in user) {
  console.log(key, user[key]);
}
// Output:
// name Ana
// age 25
`}</code>
        </pre>
        <p>
          <span className="font-semibold">Note:</span> <code>for...in</code> is generally used for objects, not arrays.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Breaking and Continuing</h3>
        <ul className="list-disc list-inside mb-2">
          <li><code>break</code>: Exits the loop immediately.</li>
          <li><code>continue</code>: Skips the current iteration and continues with the next one.</li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}
// Output:
// 0
// 1
// 3
`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const arr = [2, 4, 6];
let result = "";
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
console.log(result);

for (const num of arr) {
  if (num > 3) {
    console.log(num);
  }
}`}</code>
        </pre>
      </section>
    </div>
  );
}
