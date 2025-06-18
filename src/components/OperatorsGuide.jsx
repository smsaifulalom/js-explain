import React from "react";

export default function OperatorsGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">1.2 Operators</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What are Operators?</h3>
        <p>
          <span className="font-semibold">Operators</span> are special symbols or keywords that tell JavaScript to perform specific actions on one or more values (operands).
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Types of Operators</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Arithmetic Operators:</span> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">+</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">-</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">*</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">/</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">%</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">**</code>
            <br />
            <span className="text-sm text-gray-600 dark:text-gray-400">Addition, subtraction, multiplication, division, modulus (remainder), exponentiation.</span>
          </li>
          <li>
            <span className="font-semibold">Assignment Operators:</span> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">=</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">+=</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">-=</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">*=</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">/=</code>
            <br />
            <span className="text-sm text-gray-600 dark:text-gray-400">Assign and update values.</span>
          </li>
          <li>
            <span className="font-semibold">Comparison Operators:</span> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">==</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">===</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">!=</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">!==</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&gt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&gt;=</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;=</code>
            <br />
            <span className="text-sm text-gray-600 dark:text-gray-400">Compare two values and return a boolean.</span>
          </li>
          <li>
            <span className="font-semibold">Logical Operators:</span> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&amp;&amp;</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">||</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">!</code>
            <br />
            <span className="text-sm text-gray-600 dark:text-gray-400">Combine or invert boolean values.</span>
          </li>
          <li>
            <span className="font-semibold">Unary Operators:</span> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">++</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">--</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">typeof</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">delete</code>
            <br />
            <span className="text-sm text-gray-600 dark:text-gray-400">Operate on a single operand.</span>
          </li>
          <li>
            <span className="font-semibold">Ternary Operator:</span> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">condition ? expr1 : expr2</code>
            <br />
            <span className="text-sm text-gray-600 dark:text-gray-400">Short-hand for if/else.</span>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Examples</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Arithmetic
let sum = 5 + 3;       // 8
let product = 4 * 2;   // 8
let power = 2 ** 3;    // 8

// Assignment
let x = 10;
x += 5;                // 15

// Comparison
let isEqual = (5 == "5");    // true (loose equality)
let isStrictEqual = (5 === "5"); // false (strict equality)
let isGreater = (10 > 5);    // true

// Logical
let andResult = true && false; // false
let orResult = true || false;  // true
let notResult = !true;         // false

// Unary
let count = 1;
count++;                  // 2
let type = typeof count;  // "number"

// Ternary
let age = 18;
let canVote = age >= 18 ? "Yes" : "No"; // "Yes"
`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>
          <span className="font-semibold">Write a small code snippet that demonstrates:</span>
        </p>
        <ul className="list-decimal list-inside mb-2">
          <li>Using at least two arithmetic operators</li>
          <li>Using a comparison operator</li>
          <li>Using a logical operator</li>
          <li>Using the ternary operator</li>
        </ul>
      </section>
    </div>
  );
} 