export default function AsyncAwaitGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">3.10 Async/Await in JavaScript</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What are Async and Await?
        </h3>
        <p>
          <span className="font-semibold">Async/await</span> is a modern syntax
          introduced in ES2017 that simplifies working with promises. It allows
          you to write asynchronous code that looks and behaves like synchronous
          code, making it easier to read, write, and debug.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>async</code> before a function means the function always
            returns a <code>Promise</code>.
          </li>
          <li>
            <code>await</code> pauses the execution of the async function until
            the awaited <code>Promise</code> settles (resolves or rejects), then
            returns the resolved value or throws an error.
          </li>
          <li>
            <code>await</code> can only be used inside <code>async</code>{" "}
            functions (or at the top level in modules).
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Basic Example</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`async function greet() {
  return "Hello!";
}

greet().then(message => console.log(message)); // Logs: Hello!

async function greetAwait() {
  const message = await Promise.resolve("Hello with await!");
  console.log(message);
}
greetAwait(); // Logs: Hello with await!`}</code>
        </pre>
        <p>
          The first function returns a promise that resolves to "Hello!". The
          second uses <code>await</code> to pause execution until the promise
          resolves, then logs the message.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Awaiting Promises</h3>
        <p>
          The <code>await</code> keyword waits for a promise to settle and
          returns its resolved value. If the promise rejects, <code>await</code>{" "}
          throws an error that can be caught with <code>try/catch</code>.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
fetchData();`}</code>
        </pre>
        <p>
          This example fetches data from an API, awaiting the fetch and JSON
          parsing. Errors are handled cleanly with <code>try/catch</code>.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Sequential vs Concurrent Await
        </h3>
        <p>
          Await pauses execution, so awaiting multiple promises sequentially can
          be slower than running them concurrently.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Sequential (slower)
async function sequential() {
  const result1 = await fetchData1();
  const result2 = await fetchData2();
  console.log(result1, result2);
}

// Concurrent (faster)
async function concurrent() {
  const promise1 = fetchData1();
  const promise2 = fetchData2();
  const result1 = await promise1;
  const result2 = await promise2;
  console.log(result1, result2);
}`}</code>
        </pre>
        <p>
          Running promises concurrently improves performance by starting both
          operations before awaiting their results.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Error Handling</h3>
        <p>
          Use <code>try/catch</code> blocks inside async functions to handle
          errors from awaited promises.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`async function riskyOperation() {
  try {
    const result = await someAsyncFunction();
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Top-Level Await (ES2022)</h3>
        <p>
          Modern JavaScript modules allow <code>await</code> at the top level
          without wrapping in an async function. This enables simpler
          asynchronous module initialization.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// In a module (.mjs or type="module")
const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());
console.log(data);`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Summary</h3>
        <ul className="list-disc list-inside">
          <li>
            <code>async</code> functions always return a promise.
          </li>
          <li>
            <code>await</code> pauses execution until a promise settles,
            returning the resolved value or throwing if rejected.
          </li>
          <li>
            Use <code>try/catch</code> for error handling inside async
            functions.
          </li>
          <li>
            Prefer concurrent awaits with <code>Promise.all()</code> for
            multiple independent async operations.
          </li>
          <li>
            Top-level await is supported in modern modules for simpler
            asynchronous workflows.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`async function example() {
  const result = await Promise.resolve('Hello World!');
  console.log(result);
  return result;
}

example().then(res => console.log('Returned:', res));`}</code>
        </pre>
      </section>
    </div>
  );
}
