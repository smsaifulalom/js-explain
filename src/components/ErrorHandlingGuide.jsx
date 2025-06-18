export default function ErrorHandlingGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        1.12 Error Handling in JavaScript (<code>try</code>/<code>catch</code>/
        <code>finally</code>)
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Why Handle Errors?</h3>
        <p>
          <span className="font-semibold">Error handling</span> lets you
          gracefully deal with unexpected situations in your code, such as
          invalid input, network failures, or bugs. JavaScript provides{" "}
          <code>try</code>, <code>catch</code>, and <code>finally</code> blocks
          for structured error handling.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">try...catch</h3>
        <p>
          Use <code>try</code> to wrap code that might throw an error. If an
          error occurs, control jumps to the <code>catch</code> block.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`try {
  // Code that might throw an error
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  // Handle the error
  console.log("An error occurred:", error.message);
}`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            If no error occurs, <code>catch</code> is skipped.
          </li>
          <li>
            If an error occurs, code after the error in <code>try</code> is
            skipped, and <code>catch</code> runs.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">finally</h3>
        <p>
          The <code>finally</code> block (optional) runs{" "}
          <span className="font-semibold">always</span>, whether or not an error
          occurred. Use it for cleanup tasks.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`try {
  console.log("Trying...");
  throw new Error("Oops!");
} catch (e) {
  console.log("Caught:", e.message);
} finally {
  console.log("This always runs.");
}
// Output:
// Trying...
// Caught: Oops!
// This always runs.`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Throwing Errors</h3>
        <p>
          You can throw your own errors using <code>throw</code>:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(4, 0));
} catch (err) {
  console.log("Error:", err.message);
}`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Catching Specific Errors</h3>
        <p>
          You can inspect the <code>error</code> object in <code>catch</code> to
          handle different types of errors differently.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`try {
  JSON.parse("{ invalid json }");
} catch (e) {
  if (e instanceof SyntaxError) {
    console.log("JSON Error:", e.message);
  } else {
    console.log("Other Error:", e.message);
  }
}`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function test() {
  try {
    console.log("Start");
    throw new Error("Test error");
  } catch (e) {
    console.log("Caught:", e.message);
  } finally {
    console.log("End");
  }
}
test();`}</code>
        </pre>
      </section>
    </div>
  );
}
