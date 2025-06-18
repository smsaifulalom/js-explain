export default function DebuggingGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        5.1 JavaScript Debugging: Console Methods and Breakpoints
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Why Debugging Matters</h3>
        <p>
          Debugging identifies and resolves errors in your JavaScript code.
          Modern browsers provide powerful tools like the{" "}
          <span className="font-semibold">Console API</span> and{" "}
          <span className="font-semibold">breakpoints</span> to inspect values,
          track execution flow, and diagnose issues efficiently.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Console Methods</h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <span className="font-semibold">console.log()</span>: Basic output
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
              <code>{`console.log('User:', { name: 'Alice', age: 25 });
// Output: User: {name: "Alice", age: 25}`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">console.error()</span>: Highlights
            errors
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
              <code>{`console.error('File not found!');`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">console.table()</span>: Displays
            tabular data
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
              <code>{`console.table([{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }]);`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">console.time() & timeEnd()</span>:
            Measures execution time
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
              <code>{`console.time('API Call');
fetch('/data').then(() => console.timeEnd('API Call'));
// Output: API Call: 250ms`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">console.trace()</span>: Prints call
            stack
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
              <code>{`function foo() { console.trace(); }
function bar() { foo(); }
bar();
// Output: Stack trace showing bar → foo → console.trace`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Breakpoints</h3>
        <p>
          Breakpoints pause code execution at specific lines, allowing
          inspection of variables and call stacks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">
              Using <code>debugger</code> keyword:
            </h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto text-sm">
              <code>{`function calculate() {
  const a = 5;
  const b = 10;
  debugger; // Execution pauses here
  return a + b;
}
calculate();`}</code>
            </pre>
            <p>
              Opens browser debugger when execution hits <code>debugger</code>
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              Browser DevTools Setup (Chrome):
            </h4>
            <ol className="list-decimal list-inside space-y-1">
              <li>Open DevTools (F12)</li>
              <li>
                Navigate to <strong>Sources</strong> tab
              </li>
              <li>Find your JavaScript file</li>
              <li>Click line number to add breakpoint</li>
              <li>Trigger code execution</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Advanced Breakpoint Types
        </h3>
        <table className="table-auto w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b p-2">Type</th>
              <th className="border-b p-2">Usage</th>
              <th className="border-b p-2">How to Set</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Conditional</td>
              <td className="p-2">Pauses when condition is true</td>
              <td className="p-2">Right-click breakpoint → Edit breakpoint</td>
            </tr>
            <tr>
              <td className="p-2">DOM Change</td>
              <td className="p-2">Pauses when DOM node changes</td>
              <td className="p-2">
                Elements tab → Right-click element → Break on
              </td>
            </tr>
            <tr>
              <td className="p-2">XHR/Fetch</td>
              <td className="p-2">Pauses on network requests</td>
              <td className="p-2">
                Sources tab → XHR Breakpoints → Add URL pattern
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Debugging Workflow Example
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function processOrder(items) {
  console.time('processOrder');
  let total = 0;
  
  // Set breakpoint here to inspect 'items'
  items.forEach(item => {
    debugger; // Pause for each item
    total += item.price * item.quantity;
  });

  console.table(items);
  console.timeEnd('processOrder');
  return total;
}

// Trigger with problematic data:
processOrder([{ price: 5, quantity: 2 }, { price: NaN, quantity: 1 }]);`}</code>
        </pre>
        <p>
          When execution pauses at <code>debugger</code>, inspect variables in
          DevTools' <strong>Scope</strong> section to find the NaN value.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
        <ul className="list-disc list-inside">
          <li>
            Use <code>console.error()</code> for genuine errors to make them
            stand out
          </li>
          <li>
            Remove <code>debugger</code> statements before deploying to
            production
          </li>
          <li>Combine console logging with breakpoints for complex issues</li>
          <li>
            Use <code>console.groupCollapsed()</code> for nested debugging
            information
          </li>
          <li>Leverage conditional breakpoints for loop iterations</li>
        </ul>
      </section>
    </div>
  );
}
