export default function PromisesGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">3.9 Promises in JavaScript</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is a Promise?</h3>
        <p>
          A <span className="font-semibold">Promise</span> is a JavaScript
          object representing the eventual completion (or failure) of an
          asynchronous operation and its resulting value.
          <br />
          Promises help you write cleaner asynchronous code and avoid "callback
          hell" by chaining operations and handling errors more elegantly.
          <br />
        </p>
        <ul className="list-disc list-inside">
          <li>
            A promise can be in one of three states:{" "}
            <span className="font-semibold">pending</span>,{" "}
            <span className="font-semibold">fulfilled</span>, or{" "}
            <span className="font-semibold">rejected</span>.
          </li>
          <li>
            Once fulfilled or rejected, the state is final and cannot change.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Creating a Promise</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const promise = new Promise((resolve, reject) => {
  // Do something asynchronous
  if (/* success */) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            The function passed to <code>new Promise()</code> is called the{" "}
            <span className="font-semibold">executor</span>.
          </li>
          <li>
            Call <code>resolve(value)</code> to fulfill the promise,{" "}
            <code>reject(error)</code> to reject it.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Consuming Promises: <code>then</code>, <code>catch</code>,{" "}
          <code>finally</code>
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`promise
  .then(value => {
    // handle fulfillment
    console.log('Resolved:', value);
  })
  .catch(error => {
    // handle rejection
    console.log('Rejected:', error);
  })
  .finally(() => {
    // always runs
    console.log('Done!');
  });`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            <code>then()</code> handles successful resolution.
          </li>
          <li>
            <code>catch()</code> handles errors or rejection.
          </li>
          <li>
            <code>finally()</code> runs regardless of outcome.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Example: Basic Promise</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const count = true;
const countValue = new Promise((resolve, reject) => {
  if (count) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value.");
  }
});

countValue
  .then(result => {
    console.log(result); // "There is a count value."
  })
  .catch(error => {
    console.log(error);
  });`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            If <code>count</code> is true, the promise resolves; otherwise, it
            rejects.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Chaining Promises</h3>
        <p>
          You can chain multiple <code>then()</code> calls to perform
          asynchronous operations in sequence.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
})
  .then(result => {
    console.log(result); // 1
    return result * 2;
  })
  .then(result => {
    console.log(result); // 2
    return result * 2;
  })
  .then(result => {
    console.log(result); // 4
  });`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Each <code>then()</code> returns a new promise, allowing chaining.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Promise Combinators</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Promise.all()</span>: Resolves when
            all promises resolve, or rejects if any reject.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`Promise.all([
  Promise.resolve(3),
  42,
  new Promise(resolve => setTimeout(resolve, 100, "foo"))
]).then(values => {
  console.log(values); // [3, 42, "foo"]
});`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Promise.race()</span>: Resolves or
            rejects as soon as one promise resolves or rejects.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`Promise.race([
  new Promise(resolve => setTimeout(resolve, 500, "one")),
  new Promise(resolve => setTimeout(resolve, 100, "two"))
]).then(value => {
  console.log(value); // "two"
});`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Promise.any()</span>: Resolves as
            soon as any promise fulfills, or rejects if all reject.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`Promise.any([
  Promise.reject("Error 1"),
  new Promise(resolve => setTimeout(resolve, 100, "Success")),
  new Promise(resolve => setTimeout(resolve, 200, "Another success"))
]).then(value => {
  console.log(value); // "Success"
});`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Promise.allSettled()</span>:
            Resolves after all promises settle (fulfilled or rejected).
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Promises in Real-World: Fetch API Example
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) throw new Error('HTTP error!');
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            <code>fetch()</code> returns a promise that resolves with a response
            object.
          </li>
          <li>
            Chaining <code>then()</code> allows you to process the result step
            by step.
          </li>
          <li>
            <code>catch()</code> handles network errors or thrown exceptions.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Async/Await: Syntactic Sugar for Promises
        </h3>
        <p>
          <code>async</code> and <code>await</code> make working with promises
          easier and more like synchronous code.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) throw new Error('HTTP error!');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchData();`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            <code>await</code> pauses execution until the promise settles.
          </li>
          <li>
            Use <code>try/catch</code> for error handling.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved!"), 1000);
});
promise
  .then(value => {
    console.log(value);
    return "Chained!";
  })
  .then(value => {
    console.log(value);
    throw new Error("Oops!");
  })
  .catch(error => {
    console.log("Caught:", error.message);
  })
  .finally(() => {
    console.log("Done!");
  });`}</code>
        </pre>
      </section>
    </div>
  );
}
