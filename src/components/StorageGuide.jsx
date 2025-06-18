export default function StorageGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        2.5 Local Storage and Session Storage in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What are Local Storage and Session Storage?
        </h3>
        <p>
          <span className="font-semibold">localStorage</span> and{" "}
          <span className="font-semibold">sessionStorage</span> are part of the
          Web Storage API. They allow you to store key/value pairs in the
          browser, providing a simple way to save data on the client side
          without using cookies.
          <br />
          Both are supported in all modern browsers and accessible via the{" "}
          <code>window</code> object.
          <br />
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Key Differences</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">localStorage:</span> Data persists
            even after the browser or tab is closed. Data remains until
            explicitly cleared by your code or the user.
            <br />
          </li>
          <li>
            <span className="font-semibold">sessionStorage:</span> Data persists
            only for the duration of the page session (tab/window). Data is
            cleared when the tab or window is closed.
            <br />
          </li>
        </ul>
        <table className="table-auto w-full text-left border-collapse text-sm my-4">
          <thead>
            <tr>
              <th className="border-b p-2">Feature</th>
              <th className="border-b p-2">localStorage</th>
              <th className="border-b p-2">sessionStorage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Persistence</td>
              <td className="p-2">Until cleared</td>
              <td className="p-2">Until tab/window closes</td>
            </tr>
            <tr>
              <td className="p-2">Scope</td>
              <td className="p-2">Origin (domain)</td>
              <td className="p-2">Origin + tab/window</td>
            </tr>
            <tr>
              <td className="p-2">Storage limit</td>
              <td className="p-2">~5MB</td>
              <td className="p-2">~5MB</td>
            </tr>
            <tr>
              <td className="p-2">Accessible from</td>
              <td className="p-2">All tabs/windows (same origin)</td>
              <td className="p-2">Current tab/window only</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Common Use Cases</h3>
        <ul className="list-disc list-inside">
          <li>Storing user preferences (e.g., dark mode, language)</li>
          <li>Saving shopping cart or watch list items</li>
          <li>
            Persisting session tokens (never store sensitive credentials!)
          </li>
          <li>Autosaving form data between reloads (sessionStorage)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">API Methods and Examples</h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <span className="font-semibold">setItem(key, value):</span> Store a
            value (as a string).
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`localStorage.setItem("theme", "dark");
sessionStorage.setItem("jwt", "abc123");`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">getItem(key):</span> Retrieve a
            value.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const theme = localStorage.getItem("theme");
const token = sessionStorage.getItem("jwt");`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">removeItem(key):</span> Remove a
            value.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`localStorage.removeItem("theme");
sessionStorage.removeItem("jwt");`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">clear():</span> Remove all key/value
            pairs.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`localStorage.clear();
sessionStorage.clear();`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Iterating over keys:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(key, localStorage.getItem(key));
}`}</code>
            </pre>
          </li>
        </ul>
        <p className="mt-2">
          <span className="font-semibold">Note:</span> All values are stored as
          strings. To store/retrieve objects or arrays, use{" "}
          <code>JSON.stringify()</code> and <code>JSON.parse()</code>.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
          <code>{`const user = { name: "Sam", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // "Sam"`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Security and Limitations</h3>
        <ul className="list-disc list-inside">
          <li>
            Do <span className="font-semibold">not</span> store sensitive
            information (passwords, personal data) in
            localStorage/sessionStorage.
          </li>
          <li>
            Data is accessible by any script on the page (including third-party
            scripts).
          </li>
          <li>Storage is limited (~5MB per origin).</li>
          <li>Data is stored as plain text (not encrypted).</li>
          <li>
            localStorage persists until cleared; sessionStorage is cleared when
            the tab/window closes.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`localStorage.setItem("count", "1");
sessionStorage.setItem("count", "100");
console.log(localStorage.getItem("count"));
console.log(sessionStorage.getItem("count"));
localStorage.removeItem("count");
console.log(localStorage.getItem("count"));`}</code>
        </pre>
      </section>
    </div>
  );
}
