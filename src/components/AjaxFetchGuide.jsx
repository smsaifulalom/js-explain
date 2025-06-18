export default function AjaxFetchGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        2.4 AJAX and Fetch API in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is AJAX?</h3>
        <p>
          <span className="font-semibold">AJAX</span> (Asynchronous JavaScript
          and XML) is a technique for making asynchronous HTTP requests from the
          browser to a server, allowing web pages to update parts of the page
          without reloading the entire page. AJAX enables dynamic, interactive
          web applications by letting JavaScript fetch data and update the DOM
          in the background.
          <br />
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Traditional AJAX: <code>XMLHttpRequest</code>
        </h3>
        <p>
          The original way to make AJAX requests is with the{" "}
          <code>XMLHttpRequest</code> object. It allows you to send and receive
          data asynchronously, but the syntax is verbose and error handling is
          manual.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("Data:", JSON.parse(xhr.responseText));
  } else {
    console.error("Failed:", xhr.status);
  }
};
xhr.onerror = function () {
  console.error("Request failed due to a network error.");
};
xhr.send();`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Requires callbacks for handling responses and errors.</li>
          <li>Can handle various response types (JSON, XML, text).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Modern AJAX: Fetch API</h3>
        <p>
          The <span className="font-semibold">Fetch API</span> is the modern,
          promise-based way to make HTTP requests in JavaScript. It is simpler
          and more readable than <code>XMLHttpRequest</code>, and is now the
          standard for AJAX in modern browsers.
          <br />
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) throw new Error('HTTP error! Status: ' + response.status);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Returns a <code>Promise</code> that resolves with a{" "}
            <code>Response</code> object.
          </li>
          <li>
            Use <code>response.json()</code>, <code>response.text()</code>,
            etc., to read the response body.
          </li>
          <li>
            Handles errors with <code>.catch()</code> or <code>try/catch</code>{" "}
            in <code>async/await</code> syntax.
          </li>
          <li>
            Does <span className="font-semibold">not</span> reject the promise
            for HTTP error status (like 404/500); you must check{" "}
            <code>response.ok</code> yourself.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Fetch API with <code>async/await</code>
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) throw new Error('HTTP error! Status: ' + response.status);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
getData();`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            <code>async/await</code> makes asynchronous code look synchronous
            and is easier to read.
          </li>
          <li>
            Always wrap <code>await fetch()</code> in <code>try/catch</code> for
            error handling.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Sending Data (POST Request)
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
})
  .then(response => response.json())
  .then(data => console.log(data));`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Set <code>method</code>, <code>headers</code>, and <code>body</code>{" "}
            in the options object.
          </li>
          <li>
            Use <code>JSON.stringify()</code> to send JSON data.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          AJAX vs. Fetch API: Comparison
        </h3>
        <table className="table-auto w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b p-2">Feature</th>
              <th className="border-b p-2">Fetch API</th>
              <th className="border-b p-2">AJAX (XMLHttpRequest)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Syntax</td>
              <td className="p-2">Cleaner, promise-based</td>
              <td className="p-2">Verbose, callback-based</td>
            </tr>
            <tr>
              <td className="p-2">Error Handling</td>
              <td className="p-2">Easier with promises</td>
              <td className="p-2">Manual, more complex</td>
            </tr>
            <tr>
              <td className="p-2">Data Formats</td>
              <td className="p-2">JSON, text, blob, etc.</td>
              <td className="p-2">JSON, XML, text, etc.</td>
            </tr>
            <tr>
              <td className="p-2">Progress Events</td>
              <td className="p-2">Limited</td>
              <td className="p-2">Better support</td>
            </tr>
            <tr>
              <td className="p-2">Browser Support</td>
              <td className="p-2">Modern browsers</td>
              <td className="p-2">All browsers</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
        <ul className="list-disc list-inside">
          <li>
            Use <code>async/await</code> for cleaner, more readable code.
          </li>
          <li>
            Always check <code>response.ok</code> to handle HTTP errors.
          </li>
          <li>
            Handle network errors with <code>catch</code> or{" "}
            <code>try/catch</code>.
          </li>
          <li>
            Consider caching responses if the same request is made frequently.
            <br />
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log(data.title);
    return fetch('https://jsonplaceholder.typicode.com/posts/9999');
  })
  .then(response => {
    if (!response.ok) throw new Error('Not found!');
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error.message));`}</code>
        </pre>
      </section>
    </div>
  );
}
