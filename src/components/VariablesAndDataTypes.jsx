import React from "react";

export default function VariablesAndDataTypes() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">1.1 Variables and Data Types</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Variables</h3>
        <p className="mb-2">
          Variables are containers for storing data values. In JavaScript, you declare variables using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">var</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let</code>, or <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">const</code>.
        </p>
        <ul className="list-disc list-inside mb-2">
          <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">var</code>: Function-scoped, older syntax.</li>
          <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let</code>: Block-scoped, can be reassigned.</li>
          <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">const</code>: Block-scoped, cannot be reassigned after initialization.</li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`let age = 25;
const name = "Alice";
var isActive = true;`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Data Types</h3>
        <p className="mb-2">
          JavaScript is dynamically typed, meaning variables can hold any type of data and the type can change at runtime. Data types are broadly classified into:
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Primitive Data Types</h4>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li><strong>String:</strong> Textual data. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let greeting = "Hello, world!";</code></li>
          <li><strong>Number:</strong> Integer or floating-point. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let score = 42;</code></li>
          <li><strong>BigInt:</strong> Large integers beyond Number limits. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let big = 9007199254740991n;</code></li>
          <li><strong>Boolean:</strong> Logical value, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">true</code> or <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">false</code>. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let isOnline = false;</code></li>
          <li><strong>Undefined:</strong> Variable declared but not assigned. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let x;</code></li>
          <li><strong>Null:</strong> Intentional absence of any object value. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let empty = null;</code></li>
          <li><strong>Symbol:</strong> Unique and immutable value, often used as object keys. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let id = Symbol('id');</code></li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Non-Primitive (Reference) Data Types</h4>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Object:</strong> Collection of key-value pairs. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let person = {'{ name: "John", age: 30 }'};</code></li>
          <li><strong>Array:</strong> Ordered list of values. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let numbers = [1, 2, 3];</code></li>
          <li><strong>Function:</strong> Reusable block of code. <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">function greet() {'{ return "Hi!"; }'}</code></li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Examples</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`let myString = "JavaScript";       // String
let myNumber = 2025;               // Number
let myBigInt = 12345678901234567890n; // BigInt
let myBoolean = true;              // Boolean
let myUndefined;                   // Undefined
let myNull = null;                 // Null
let mySymbol = Symbol("desc");     // Symbol

let myObject = { a: 1, b: 2 };     // Object
let myArray = [1, 2, 3];           // Array (object)
function myFunction() { return 1;} // Function (object)`}</code>
        </pre>
      </section>
    </div>
  );
} 