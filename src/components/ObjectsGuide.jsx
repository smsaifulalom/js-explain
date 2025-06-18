import React from "react";

export default function ObjectsGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">1.6 Objects</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is an Object?</h3>
        <p>
          An <span className="font-semibold">object</span> is a collection of key-value pairs. Keys are called <span className="font-semibold">properties</span> (or <span className="font-semibold">methods</span> if the value is a function). Objects are used to store and organize data and functionality.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Creating Objects</h3>
        <ul className="list-disc list-inside mb-2">
          <li>Using object literal syntax:</li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`const person = {
  name: "Alice",
  age: 28,
  isStudent: false
};`}</code>
        </pre>
        <ul className="list-disc list-inside mb-2">
          <li>Using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Object</code> constructor:</li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`const car = new Object();
car.brand = "Toyota";
car.year = 2020;`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Accessing and Modifying Properties</h3>
        <ul className="list-disc list-inside mb-2">
          <li>Dot notation: <code>person.name</code></li>
          <li>Bracket notation: <code>person["age"]</code></li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`console.log(person.name);      // "Alice"
console.log(person["age"]);   // 28
person.isStudent = true;
person["city"] = "Dhaka";
console.log(person);`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Methods (Functions as Properties)</h3>
        <p>
          If a property's value is a function, it's called a <span className="font-semibold">method</span>.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`const calculator = {
  add: function(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b; // Shorthand method syntax
  }
};

console.log(calculator.add(2, 3));      // 5
console.log(calculator.multiply(4, 5)); // 20
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Looping Through Objects</h3>
        <ul className="list-disc list-inside mb-2">
          <li><code>for...in</code> loop iterates over enumerable properties:</li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`for (let key in person) {
  console.log(key, person[key]);
}`}</code>
        </pre>
        <ul className="list-disc list-inside mb-2">
          <li>
            Use <code>Object.keys()</code>, <code>Object.values()</code>, or <code>Object.entries()</code> for arrays of keys, values, or [key, value] pairs:
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`console.log(Object.keys(person));   // ["name", "age", "isStudent", "city"]
console.log(Object.values(person)); // ["Alice", 28, true, "Dhaka"]
console.log(Object.entries(person)); // [["name","Alice"],["age",28],["isStudent",true],["city","Dhaka"]]
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Nested Objects</h3>
        <p>
          Objects can contain other objects:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`const student = {
  name: "Bob",
  address: {
    city: "Chittagong",
    zip: 4000
  }
};

console.log(student.address.city); // "Chittagong"
`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const user = {
  name: "Sam",
  age: 22
};
user.email = "sam@email.com";
delete user.age;
console.log(Object.keys(user));
console.log(user.hasOwnProperty("age"));
`}</code>
        </pre>
      </section>
    </div>
  );
} 