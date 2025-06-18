export default function FunctionalProgrammingGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        4.1 Functional Programming Basics: <code>map</code>, <code>filter</code>
        , <code>reduce</code> in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What are <code>map</code>, <code>filter</code>, and{" "}
          <code>reduce</code>?
        </h3>
        <p>
          These are higher-order array methods that embody the principles of
          functional programming in JavaScript. They allow you to process and
          manipulate arrays in a declarative and concise way, making your code
          more readable and expressive.
          <br />
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          <code>map()</code>: The Transformer
        </h3>
        <p>
          <code>map()</code> creates a new array by applying a function to each
          element of the original array. The new array has the same length as
          the original.
          <br />
          Use <code>map()</code> when you want to transform every element in an
          array.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
console.log(squares); // [1, 4, 9, 16, 25]

const miles = [1, 5, 10, 75];
const kilometers = miles.map(num => (num * 1.609344).toFixed(2));
console.log(kilometers); // ["1.61", "8.05", "16.09", "120.70"]
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Returns a new array; does not modify the original.</li>
          <li>
            Callback receives <code>(currentValue, index, array)</code> as
            arguments.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          <code>filter()</code>: The Gatekeeper
        </h3>
        <p>
          <code>filter()</code> creates a new array with all elements that pass
          a test implemented by the provided function.
          <br />
          Use <code>filter()</code> to select a subset of elements based on a
          condition.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

const duplicateNumbers = [1, 1, 2, 3, 4, 4, 5];
const uniqueNumbers = duplicateNumbers.filter(
  (elem, index, arr) => arr.indexOf(elem) === index
);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Returns a new array with only the elements that return{" "}
            <code>true</code> from the callback.
          </li>
          <li>Does not modify the original array.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          <code>reduce()</code>: The Aggregator
        </h3>
        <p>
          <code>reduce()</code> applies a function against an accumulator and
          each element in the array (from left to right) to reduce it to a
          single value.
          <br />
          Use <code>reduce()</code> for summing, aggregating, or combining all
          elements into a single result.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

const prices = [10, 20, 30];
const total = prices.reduce((totalPrice, nextPrice) => {
  console.log(\`Total so far: \${totalPrice}, Next: \${nextPrice}\`);
  return totalPrice + nextPrice;
}, 0);
// Output:
// Total so far: 0, Next: 10
// Total so far: 10, Next: 20
// Total so far: 30, Next: 30
// total = 60
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Callback receives{" "}
            <code>(accumulator, currentValue, index, array)</code>.
          </li>
          <li>
            The second argument to <code>reduce()</code> is the initial value of
            the accumulator.
          </li>
          <li>Returns a single value, not an array.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Chaining <code>map()</code>, <code>filter()</code>, and{" "}
          <code>reduce()</code>
        </h3>
        <p>
          These methods are often chained together for powerful data
          transformations.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .map(n => n * 2)      // [2, 4, 6, 8, 10]
  .filter(n => n > 5)   // [6, 8, 10]
  .reduce((acc, n) => acc + n, 0); // 24
console.log(result); // 24
`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const arr = [2, 4, 6, 8];
const mapped = arr.map(x => x + 1);
const filtered = mapped.filter(x => x % 2 === 0);
const reduced = filtered.reduce((acc, x) => acc * x, 1);

console.log(mapped);
console.log(filtered);
console.log(reduced);`}</code>
        </pre>
      </section>
    </div>
  );
}
