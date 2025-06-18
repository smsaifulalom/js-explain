import React from "react";

export default function ControlFlowGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">1.3 Control Flow (if/else, switch)</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is Control Flow?</h3>
        <p>
          <span className="font-semibold">Control flow</span> determines the order in which statements are executed in your code. JavaScript provides several ways to make decisions and execute code conditionally.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">if / else Statements</h3>
        <p>
          The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">if</code> statement executes a block of code if a specified condition is <span className="font-semibold">true</span>. You can use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">else</code> to run code if the condition is <span className="font-semibold">false</span>, and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">else if</code> to check multiple conditions.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}
// Output: "Grade: B"
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">switch Statement</h3>
        <p>
          The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">switch</code> statement is used to perform different actions based on different conditions. It's often cleaner than multiple <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">if/else if</code> statements when checking the same variable against many values.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apples are red or green.");
    break;
  case "banana":
    console.log("Bananas are yellow.");
    break;
  default:
    console.log("Unknown fruit.");
}
// Output: "Apples are red or green."
`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>
          <span className="font-semibold">Write a code snippet that:</span>
        </p>
        <ul className="list-decimal list-inside mb-2">
          <li>Uses an <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">if/else if/else</code> statement to check if a number is positive, negative, or zero.</li>
          <li>Uses a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">switch</code> statement to print a message for the days of the week (<code>1</code> for Monday, <code>2</code> for Tuesday, etc.).</li>
        </ul>
      </section>
    </div>
  );
} 