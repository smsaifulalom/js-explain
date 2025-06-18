export default function FetchThirdPartyAPIGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        7.1 Fetching and Using Third-Party APIs in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What is a Third-Party API?
        </h3>
        <p>
          A <span className="font-semibold">third-party API</span> is an
          external service that provides data or functionality for your app via
          HTTP requests. Examples include weather data, maps, search, and social
          media feeds. Integrating these APIs lets you add powerful features
          without building everything from scratch.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          How to Fetch Data from a Third-Party API
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Use the <code>fetch()</code> function (built into browsers) to make
            HTTP requests. <code>fetch()</code> returns a Promise.
          </li>
          <li>
            Process the response with <code>then()</code> or <code>await</code>{" "}
            and extract data using <code>response.json()</code> for JSON APIs.
          </li>
          <li>
            Handle errors with <code>catch()</code> or <code>try/catch</code>{" "}
            blocks.
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Basic fetch with Promises
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Use the data in your UI
  })
  .catch(error => console.error('Error:', error));

// Using async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
fetchData();
`}</code>
        </pre>
        <p>
          <span className="font-semibold">Note:</span> Always check the API
          documentation for required headers, authentication, and request
          structure.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Practical Example: Fetching and Displaying Data
        </h3>
        <p>
          Let’s fetch a list of GitHub users and display their IDs and usernames
          in a table. This example demonstrates how to fetch, process, and
          render third-party API data in the DOM.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// HTML structure (for reference)
// <table id="table">
//   <tbody id="tbody"><th><td>Id</td><td>Name</td></th></tbody>
// </table>

fetch("https://api.github.com/users")
  .then(res => res.json())
  .then(data => {
    let tbodyEle = document.getElementById("tbody");
    for (let i = 0; i < 5; i++) {
      let trEle = document.createElement("tr");
      let tdId = document.createElement("td");
      let tdName = document.createElement("td");
      tdId.textContent = data[i].id;
      tdName.textContent = data[i].login;
      trEle.append(tdId, tdName);
      tbodyEle.append(trEle);
    }
  })
  .catch(error => console.error("Error:", error));
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Fetches data from the GitHub API.</li>
          <li>Processes the first 5 users and creates table rows for each.</li>
          <li>Appends the rows to the existing table in the HTML.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          API Authentication and Security
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Some APIs require an API key or OAuth token. Never expose secret
            keys in client-side code.
          </li>
          <li>
            For private keys, use a backend server as a proxy to keep secrets
            safe.
          </li>
          <li>
            Always read the API’s documentation for authentication and CORS
            requirements.
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Example using axios and an API key (in Node.js)
const axios = require('axios');
const apiKey = process.env.WEATHER_API_KEY;
const city = 'New York';
const url = \`https://api.weather.com/v3/wx/conditions/current?city=\${city}&apiKey=\${apiKey}\`;

axios.get(url)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error making API request:', error);
  });
`}</code>
        </pre>
        <p>
          <span className="font-semibold">Tip:</span> Use environment variables
          and server-side code for sensitive API keys.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Best Practices for Using Third-Party APIs
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Always handle errors gracefully and inform the user if something
            went wrong.
          </li>
          <li>Respect API rate limits to avoid being blocked.</li>
          <li>Cache API responses if possible to reduce redundant requests.</li>
          <li>
            Read and follow the API documentation for correct usage,
            authentication, and data structure.
          </li>
          <li>Test your integration with real data and edge cases.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>
          Predict what happens when you run the following code and explain why.
          What will be displayed in the console and in the DOM?
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`fetch("https://dog.ceo/api/breeds/image/random/3")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.message.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      document.body.appendChild(img);
    });
  })
  .catch(error => console.error(error));
`}</code>
        </pre>
      </section>
    </div>
  );
}
