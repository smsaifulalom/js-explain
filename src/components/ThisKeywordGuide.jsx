export default function ThisKeywordGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        1.11 The <code>this</code> Keyword in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What is <code>this</code>?
        </h3>
        <p>
          The <span className="font-semibold">this</span> keyword refers to the{" "}
          <span className="font-semibold">context</span> in which a function is
          executed. Its value depends on{" "}
          <span className="font-semibold">how</span> a function is called, not
          where it is defined.
        </p>
        <ul className="list-disc list-inside">
          <li>
            In the global scope, <code>this</code> refers to the global object (
            <code>window</code> in browsers).
          </li>
          <li>
            Inside a method, <code>this</code> refers to the object that owns
            the method.
          </li>
          <li>
            Alone or in a regular function, <code>this</code> is the global
            object (<code>undefined</code> in strict mode).
          </li>
          <li>
            In arrow functions, <code>this</code> is inherited from the
            enclosing (lexical) scope.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Examples: <code>this</code> in Different Contexts
        </h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <span className="font-semibold">Global Scope:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`console.log(this); // In browsers: window object`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Inside an Object Method:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const person = {
  name: "Sara",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // "Hello, Sara"`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Standalone Function:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`function show() {
  console.log(this);
}
show(); // In browsers: window (or undefined in strict mode)`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Arrow Function:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const obj = {
  value: 42,
  regular: function() {
    console.log(this.value);
  },
  arrow: () => {
    // Arrow functions don't have their own 'this'
    console.log(this.value);
  }
};
obj.regular(); // 42
obj.arrow();   // undefined (or window.value if not strict mode)`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Constructor Function:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`function Car(brand) {
  this.brand = brand;
}
const myCar = new Car("Toyota");
console.log(myCar.brand); // "Toyota"`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">
              Using <code>call</code>, <code>apply</code>, <code>bind</code> to
              Set <code>this</code>:
            </span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`function sayHello() {
  console.log("Hi, " + this.name);
}
const user = { name: "Alex" };
sayHello.call(user); // "Hi, Alex"`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Summary Table</h3>
        <table className="table-auto w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b p-2">Context</th>
              <th className="border-b p-2">
                Value of <code>this</code>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Global scope</td>
              <td className="p-2">
                Global object (<code>window</code> in browsers)
              </td>
            </tr>
            <tr>
              <td className="p-2">Object method</td>
              <td className="p-2">The object itself</td>
            </tr>
            <tr>
              <td className="p-2">Regular function</td>
              <td className="p-2">
                Global object (<code>undefined</code> in strict mode)
              </td>
            </tr>
            <tr>
              <td className="p-2">Arrow function</td>
              <td className="p-2">Lexical (enclosing) scope</td>
            </tr>
            <tr>
              <td className="p-2">Constructor function</td>
              <td className="p-2">The new instance</td>
            </tr>
            <tr>
              <td className="p-2">
                <code>call</code>, <code>apply</code>, <code>bind</code>
              </td>
              <td className="p-2">Explicitly set</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const obj = {
  name: "Leo",
  regular: function() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

obj.regular();
obj.arrow();`}</code>
        </pre>
      </section>
    </div>
  );
}
