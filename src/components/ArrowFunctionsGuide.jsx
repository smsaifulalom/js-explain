export default function ArrowFunctionsGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        3.2 Arrow Functions in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What are Arrow Functions?
        </h3>
        <p>
          <span className="font-semibold">Arrow functions</span> are a concise
          way to write functions, introduced in ES6 (ECMAScript 2015). They
          provide a shorter syntax compared to traditional function expressions
          and have special behavior for <code>this</code> binding.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Syntax</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Traditional function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function (with parentheses and curly braces)
const addArrow = (a, b) => {
  return a + b;
};

// Arrow function (implicit return for single expression)
const multiply = (x, y) => x * y;

// Single parameter (parentheses optional)
const square = x => x * x;

// No parameters (must use parentheses)
const greet = () => "Hello!";
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            If the function body is a single expression, you can omit{" "}
            <code>return</code> and curly braces (implicit return).
          </li>
          <li>Parentheses are required for zero or multiple parameters.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          How <code>this</code> Works in Arrow Functions
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Arrow functions{" "}
            <span className="font-semibold">
              do not have their own <code>this</code>
            </span>
            . They inherit <code>this</code> from the enclosing (lexical) scope.
          </li>
          <li>
            This makes arrow functions especially useful for callbacks or
            methods where you want to preserve the outer <code>this</code>.
          </li>
          <li>
            <span className="font-semibold">
              Do not use arrow functions as object methods or constructors
            </span>{" "}
            (they can't be used with <code>new</code>).
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const obj = {
  value: 42,
  regular: function() {
    console.log(this.value); // 42
  },
  arrow: () => {
    console.log(this.value); // undefined (inherits from global scope)
  }
};
obj.regular();
obj.arrow();`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Arrow Functions vs. Traditional Functions
        </h3>
        <table className="table-auto w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b p-2">Feature</th>
              <th className="border-b p-2">Arrow Function</th>
              <th className="border-b p-2">Traditional Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Syntax</td>
              <td className="p-2">Short, concise</td>
              <td className="p-2">Longer, more flexible</td>
            </tr>
            <tr>
              <td className="p-2">this binding</td>
              <td className="p-2">Lexical (from outer scope)</td>
              <td className="p-2">Dynamic (depends on how called)</td>
            </tr>
            <tr>
              <td className="p-2">arguments object</td>
              <td className="p-2">Not available</td>
              <td className="p-2">Available</td>
            </tr>
            <tr>
              <td className="p-2">Constructor usage</td>
              <td className="p-2">Cannot be used as constructor</td>
              <td className="p-2">
                Can be used with <code>new</code>
              </td>
            </tr>
            <tr>
              <td className="p-2">Methods in objects</td>
              <td className="p-2">Not recommended</td>
              <td className="p-2">Recommended</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Common Use Cases</h3>
        <ul className="list-disc list-inside">
          <li>
            Short, inline functions (especially for array methods like{" "}
            <code>map</code>, <code>filter</code>, <code>reduce</code>)
          </li>
          <li>
            Callbacks where you want to preserve the outer <code>this</code>
          </li>
          <li>Functional programming patterns</li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // [2, 4, 6]`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const obj = {
  count: 10,
  regular: function() {
    return this.count;
  },
  arrow: () => {
    return this.count;
  }
};
console.log(obj.regular());
console.log(obj.arrow());`}</code>
        </pre>
      </section>
    </div>
  );
}
