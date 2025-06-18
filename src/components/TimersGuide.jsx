export default function TimersGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        2.6 Timers in JavaScript (<code>setTimeout</code>, <code>setInterval</code>,{" "}
        <code>clearTimeout</code>, <code>clearInterval</code>)
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What are Timers?</h3>
        <p>
          <span className="font-semibold">Timers</span> let you schedule code
          execution after a delay or at regular intervals. They are vital for
          animations, polling, debouncing, and more. JavaScript provides{" "}
          <code>setTimeout</code> and <code>setInterval</code> for this purpose,
          as well as <code>clearTimeout</code> and <code>clearInterval</code> to
          cancel them.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">setTimeout()</h3>
        <p>
          <code>setTimeout()</code> schedules a function to run once after a
          specified delay (in milliseconds). It returns a timeout ID you can use
          to cancel the timer.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`setTimeout(function, delay, ...args);

// Example:
setTimeout(() => {
  console.log('Hello after 2 seconds');
}, 2000);`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Non-blocking: JavaScript continues running other code while waiting
            for the timeout.
          </li>
          <li>Single execution: The callback runs only once.</li>
          <li>Delay is in milliseconds (1 second = 1000 ms).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">clearTimeout()</h3>
        <p>
          <code>clearTimeout()</code> cancels a timeout set by{" "}
          <code>setTimeout()</code> if it hasn't executed yet. Pass it the ID
          returned by <code>setTimeout()</code>.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const timeoutID = setTimeout(() => {
  console.log('This will not run');
}, 3000);

clearTimeout(timeoutID);`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">setInterval()</h3>
        <p>
          <code>setInterval()</code> schedules a function to run repeatedly at
          specified intervals (in milliseconds). It returns an interval ID you
          can use to stop the interval.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`setInterval(function, interval, ...args);

// Example:
const intervalID = setInterval(() => {
  console.log('Hello every 2 seconds');
}, 2000);`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Repeats the callback every interval until stopped.</li>
          <li>Non-blocking: JavaScript continues running other code.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">clearInterval()</h3>
        <p>
          <code>clearInterval()</code> cancels a repeating interval set by{" "}
          <code>setInterval()</code>. Pass it the ID returned by{" "}
          <code>setInterval()</code>.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const intervalID = setInterval(() => {
  console.log('This will run every second');
}, 1000);

clearInterval(intervalID);`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Best Practices & Notes</h3>
        <ul className="list-disc list-inside">
          <li>
            Always clear timers when they are no longer needed to prevent memory
            leaks.
          </li>
          <li>
            For animations, prefer <code>requestAnimationFrame()</code> over{" "}
            <code>setInterval()</code> for smoother performance.
          </li>
          <li>
            Use debouncing/throttling to limit the frequency of timer-based
            functions in response to rapid events.
          </li>
          <li>
            Timers are not guaranteed to run at exact intervals due to
            JavaScript’s single-threaded event loop and possible delays.
          </li>
          <li>
            You can pass extra arguments to the callback after the
            delay/interval parameter.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const timeoutID = setTimeout(() => {
  console.log('Timeout executed');
}, 2000);

clearTimeout(timeoutID);

const intervalID = setInterval(() => {
  console.log('Interval executed');
}, 1000);

setTimeout(() => {
  clearInterval(intervalID);
  console.log('Interval cleared');
}, 3500);`}</code>
        </pre>
      </section>
    </div>
  );
}
