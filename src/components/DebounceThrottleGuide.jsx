export default function DebounceThrottleGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        4.3 Debouncing and Throttling in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Why Use Debouncing and Throttling?
        </h3>
        <p>
          <span className="font-semibold">Debouncing</span> and{" "}
          <span className="font-semibold">throttling</span> are essential
          techniques for optimizing performance in JavaScript applications. They
          control how often a function is executed in response to high-frequency
          events (like typing, scrolling, or resizing), reducing unnecessary
          calls and improving responsiveness.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Debouncing</h3>
        <p>
          <span className="font-semibold">Debouncing</span> ensures that a
          function is executed{" "}
          <strong>
            only after a specified delay has passed since the last time it was
            invoked
          </strong>
          . If the event keeps firing, the timer resets. This is ideal for
          scenarios like search inputs, where you want to wait until the user
          stops typing before making an API call.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage example: Debounced search input
const handleSearch = debounce((query) => {
  console.log('API call with query:', query);
}, 300);

document.getElementById('searchInput').addEventListener('input', (event) => {
  handleSearch(event.target.value);
});
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Each event resets the timer; the function only fires after the user
            stops triggering the event for the delay duration.
          </li>
          <li>
            Great for keypress, input, or button click events where you want to
            minimize function calls.
            <br />
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Throttling</h3>
        <p>
          <span className="font-semibold">Throttling</span> ensures that a
          function is executed{" "}
          <strong>at most once every specified interval</strong>, no matter how
          many times the event is triggered. This is ideal for events like
          scrolling or resizing, where you want to limit the rate of execution.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Usage example: Throttled window resize
const handleResize = throttle(() => {
  console.log('Window resized at', new Date().toLocaleTimeString());
}, 1000);

window.addEventListener('resize', handleResize);
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Function executes immediately, then ignores further calls until the
            interval has passed.
          </li>
          <li>
            Best for continuous, high-frequency events like scroll, resize, or
            mousemove.
            <br />
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Debounce vs. Throttle: Key Differences
        </h3>
        <table className="table-auto w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b p-2">Technique</th>
              <th className="border-b p-2">When Function Executes</th>
              <th className="border-b p-2">Best Use Cases</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Debounce</td>
              <td className="p-2">
                After user stops triggering event for delay period
              </td>
              <td className="p-2">
                Search input, button clicks, form validation
              </td>
            </tr>
            <tr>
              <td className="p-2">Throttle</td>
              <td className="p-2">
                At most once per interval, while event is firing
              </td>
              <td className="p-2">Window resize, scroll, mousemove</td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc list-inside mt-2">
          <li>
            <span className="font-semibold">Debounce:</span> Waits for a pause
            in activity, then fires once.
          </li>
          <li>
            <span className="font-semibold">Throttle:</span> Fires at regular
            intervals, regardless of activity pauses.
            <br />
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Practical Examples</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Debounced Search Bar:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const debouncedSearch = debounce((query) => {
  // Only called after user stops typing for 500ms
  fetchResults(query);
}, 500);

input.addEventListener('input', e => debouncedSearch(e.target.value));`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Throttled Scroll Event:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const throttledScroll = throttle(() => {
  // Called at most once every 200ms while scrolling
  updateScrollPosition();
}, 200);

window.addEventListener('scroll', throttledScroll);`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>
          Predict the output and behavior of the following code and explain why:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

let callCount = 0;
const debouncedLog = debounce(() => {
  callCount++;
  console.log('Debounced called', callCount);
}, 500);

// Simulate rapid calls
debouncedLog();
debouncedLog();
debouncedLog();
setTimeout(debouncedLog, 300);
setTimeout(debouncedLog, 700);`}</code>
        </pre>
      </section>
    </div>
  );
}
