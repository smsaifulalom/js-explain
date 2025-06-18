import React from "react";

export default function ScopeGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">1.8 Scope</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is Scope?</h3>
        <p>
          <span className="font-semibold">Scope</span> determines where variables, functions, and objects are accessible in your code. Understanding scope is essential for writing predictable, bug-free JavaScript.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Types of Scope</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Global Scope:</span>  
            Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in your code.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`let globalVar = "I'm global!";
function showGlobal() {
  console.log(globalVar); // Accessible
}
showGlobal();
console.log(globalVar); // Also accessible
`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Function Scope:</span>  
            Variables declared inside a function (using <code>var</code>, <code>let</code>, or <code>const</code>) are only accessible within that function.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`function myFunc() {
  let funcVar = "I'm inside a function!";
  console.log(funcVar); // Accessible here
}
myFunc();
// console.log(funcVar); // Error: funcVar is not defined
`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Block Scope:</span>  
            Variables declared with <code>let</code> or <code>const</code> inside a block (<code>{'{}'}</code>) are only accessible within that block.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`if (true) {
  let blockVar = "I'm inside a block!";
  console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Error: blockVar is not defined
`}</code>
            </pre>
            <p className="mt-2">
              <code>var</code> does <span className="font-semibold">not</span> have block scope; it is function-scoped:
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`if (true) {
  var notBlockScoped = "I'm not block scoped!";
}
console.log(notBlockScoped); // Accessible here
`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Lexical Scope</h3>
        <p>
          JavaScript uses <span className="font-semibold">lexical scoping</span>, meaning the scope of a variable is determined by its position in the source code. Inner functions have access to variables declared in their outer scope.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
          <code>{`function outer() {
  let outerVar = "I'm outside!";
  function inner() {
    console.log(outerVar); // Has access to outerVar
  }
  inner();
}
outer();
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
        <ul className="list-disc list-inside">
          <li>Prefer <code>let</code> and <code>const</code> over <code>var</code> for block scoping.</li>
          <li>Limit the use of global variables to avoid naming collisions and bugs.</li>
          <li>Use clear, descriptive variable names to avoid confusion between scopes.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`let a = 1;
function testScope() {
  let a = 2;
  if (true) {
    let a = 3;
    console.log(a);
  }
  console.log(a);
}
testScope();
console.log(a);`}</code>
        </pre>
      </section>
    </div>
  );
}
