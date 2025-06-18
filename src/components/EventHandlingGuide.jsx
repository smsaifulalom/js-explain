export default function EventHandlingGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        2.2 Event Handling in JavaScript (<code>addEventListener</code>)
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is Event Handling?</h3>
        <p>
          <span className="font-semibold">Event handling</span> lets you run
          JavaScript code in response to user actions like clicks, mouse
          movements, key presses, and more. The most common way to handle events
          is with <code>addEventListener()</code>.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          The <code>addEventListener()</code> Method
        </h3>
        <p>
          <code>addEventListener()</code> attaches an event handler to a DOM
          element, document, or window. You can add multiple event listeners of
          the same or different types to the same element, and it does not
          overwrite existing handlers.
          <br />
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm mb-2">
          <code>{`// Syntax:
element.addEventListener(event, function, useCapture);

// Example:
const btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
  alert("Button clicked!");
});`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            <strong>event</strong>: The event type (e.g., "click", "mouseover").
            Do <strong>not</strong> use the "on" prefix ("click", not
            "onclick").
          </li>
          <li>
            <strong>function</strong>: The function to run when the event
            occurs. It receives an event object as the first parameter.
          </li>
          <li>
            <strong>useCapture</strong>: Optional boolean for event propagation
            phase (default is <code>false</code> for bubbling).
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Key Features</h3>
        <ul className="list-disc list-inside">
          <li>
            You can add multiple listeners of the same or different types to an
            element.
          </li>
          <li>
            Event listeners can be added to any DOM object (elements, document,
            window).
          </li>
          <li>
            To remove a listener, use <code>removeEventListener()</code> with
            the same function reference.
          </li>
          <li>
            You can pass parameters to your handler using an anonymous function.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Examples</h3>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <span className="font-semibold">Basic Button Click:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`document.getElementById("myBtn").addEventListener("click", function() {
  alert("Clicked!");
});`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Multiple Listeners:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const btn = document.getElementById("myBtn");
btn.addEventListener("mouseover", () => console.log("Mouse over!"));
btn.addEventListener("mouseout", () => console.log("Mouse out!"));`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Passing Parameters:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`btn.addEventListener("click", function() {
  myFunction(5, 10);
});
function myFunction(a, b) {
  alert(a + b);
}`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Removing an Event Listener:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`function sayHi() { alert("Hi!"); }
btn.addEventListener("click", sayHi);
// Later...
btn.removeEventListener("click", sayHi);`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>
          Predict what happens after the following code runs, assuming the HTML
          contains <code>&lt;button id="btn"&gt;Click&lt;/button&gt;</code> and{" "}
          <code>&lt;div id="output"&gt;&lt;/div&gt;</code>:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", function() {
  output.textContent = "Button was clicked!";
});

btn.addEventListener("click", function() {
  output.style.backgroundColor = "lightgreen";
});`}</code>
        </pre>
      </section>
    </div>
  );
}
