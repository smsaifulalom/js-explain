export default function SymbolsGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">3.12 Symbols in JavaScript</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is a Symbol?</h3>
        <p>
          A <span className="font-semibold">Symbol</span> is a unique and
          immutable primitive value introduced in ES6. Symbols are often used as
          unique identifiers for object properties, ensuring no accidental
          property name collisions—even if two symbols have the same
          description, they are always distinct.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Symbols are not enumerable in <code>for...in</code> loops and are
            ignored by <code>JSON.stringify()</code>.
          </li>
          <li>
            They are often used for meta-programming, defining hidden or private
            properties, and customizing built-in behavior via{" "}
            <strong>well-known symbols</strong>.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Creating Symbols</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const sym1 = Symbol();
const sym2 = Symbol('desc'); // Optional description for debugging

console.log(sym1); // Symbol()
console.log(sym2); // Symbol(desc)
console.log(sym1 === sym2); // false (every symbol is unique)
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Even if two symbols have the same description, they are always
            unique.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Using Symbols as Object Property Keys
        </h3>
        <p>
          Symbols are commonly used as object property keys to avoid key
          collisions and create "hidden" properties.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const id = Symbol('id');
const user = {
  name: "Alice",
  [id]: 12345 // Symbol as a property key
};
console.log(user[id]); // 12345

// Symbols are not accessible via dot notation or normal property enumeration
for (const key in user) {
  console.log(key); // Only "name" will be logged
}
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Symbol-keyed properties are not enumerable in <code>for...in</code>{" "}
            or <code>Object.keys()</code>.
          </li>
          <li>
            Use <code>Object.getOwnPropertySymbols()</code> to retrieve symbol
            properties.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Well-Known Symbols</h3>
        <p>
          JavaScript defines several built-in symbols (well-known symbols) that
          allow you to customize language behavior, such as{" "}
          <code>Symbol.iterator</code> for making objects iterable,{" "}
          <code>Symbol.toStringTag</code> for customizing{" "}
          <code>Object.prototype.toString()</code>, and more[1].
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};
for (const value of myIterable) {
  console.log(value); // 1, 2, 3
}
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Well-known symbols are used internally by JavaScript and can be used
            to "hook" into built-in behaviors.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Symbol Type and Conversion
        </h3>
        <ul className="list-disc list-inside">
          <li>
            <code>typeof Symbol()</code> returns <code>"symbol"</code>.
          </li>
          <li>
            Symbols cannot be implicitly converted to strings or numbers; doing
            so throws a <code>TypeError</code>.
          </li>
          <li>
            Use <code>String(symbol)</code> or <code>symbol.toString()</code> to
            get a string description.
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const sym = Symbol('foo');
console.log(typeof sym); // "symbol"
console.log(String(sym)); // "Symbol(foo)"
console.log(sym.description); // "foo"
// console.log(sym + "bar"); // TypeError!
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Global Symbol Registry</h3>
        <p>
          Use <code>Symbol.for(key)</code> to create or access a symbol in the
          global registry. Symbols created with <code>Symbol.for</code> are
          shared across your entire codebase by key, unlike regular symbols
          which are always unique.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const sym1 = Symbol.for('shared');
const sym2 = Symbol.for('shared');
console.log(sym1 === sym2); // true

console.log(Symbol.keyFor(sym1)); // "shared"
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Best Practices and Use Cases
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Use symbols for unique property keys to avoid accidental
            overwrites.
          </li>
          <li>
            Symbols can be used for private or hidden properties (not truly
            private, but less accessible).
          </li>
          <li>
            Leverage well-known symbols for customizing built-in behaviors
            (e.g., making objects iterable)[1].
          </li>
          <li>
            Symbols are not suitable for serialization (e.g.,{" "}
            <code>JSON.stringify()</code> ignores them).
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const symA = Symbol("test");
const symB = Symbol("test");
console.log(symA === symB);

const obj = {};
obj[symA] = 1;
obj[symB] = 2;
console.log(obj[symA]);
console.log(obj[symB]);
console.log(Object.getOwnPropertySymbols(obj).length);

for (const key in obj) {
  console.log(key);
}
console.log(JSON.stringify(obj));`}</code>
        </pre>
      </section>
    </div>
  );
}
