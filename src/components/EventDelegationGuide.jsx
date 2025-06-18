export default function EventDelegationGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        4.4 Event Delegation in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What is Event Delegation?
        </h3>
        <p>
          <span className="font-semibold">Event delegation</span> is a design
          pattern in JavaScript that efficiently manages events for multiple
          child elements by attaching a single event listener to a common
          ancestor element, rather than adding listeners to each child
          individually. It leverages the event bubbling phase, where events
          propagate up the DOM tree, allowing the ancestor to handle events
          triggered by any of its descendants.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          How Does Event Delegation Work?
        </h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">
              Attach a listener to a parent:
            </span>{" "}
            Instead of adding listeners to every child, add one to a parent or
            ancestor element.
          </li>
          <li>
            <span className="font-semibold">Event bubbling:</span> When an event
            occurs on a child, it bubbles up to the parent, triggering the
            parent's event handler.
          </li>
          <li>
            <span className="font-semibold">Identify the target:</span> Inside
            the handler, use <code>event.target</code> to determine which child
            element actually triggered the event.
          </li>
          <li>
            <span className="font-semibold">Perform action:</span> Based on the
            target, execute logic specific to the child element.
          </li>
        </ul>
        <p>
          This pattern is especially useful when dealing with dynamic content,
          such as lists where items can be added or removed at runtime, because
          the parent listener will handle events for both existing and future
          children automatically.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Example: Delegating Clicks on a List
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// HTML
<ul id="itemList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

// JavaScript
document.getElementById('itemList').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log('Clicked:', event.target.textContent);
  }
});`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            The <code>click</code> event listener is attached to the{" "}
            <code>&lt;ul&gt;</code> parent, not each <code>&lt;li&gt;</code>.
          </li>
          <li>
            When an <code>&lt;li&gt;</code> is clicked, the event bubbles up to
            the <code>&lt;ul&gt;</code>, which handles it.
          </li>
          <li>
            <code>event.target</code> identifies which <code>&lt;li&gt;</code>{" "}
            was clicked.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Why Use Event Delegation?
        </h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Performance:</span> Fewer event
            listeners mean less memory usage and better performance, especially
            with many elements.
          </li>
          <li>
            <span className="font-semibold">Dynamic content:</span> Handles
            events for elements added to the DOM after the initial page load
            without extra code.
          </li>
          <li>
            <span className="font-semibold">Cleaner code:</span> Centralizes
            event logic, reducing duplication and improving maintainability.
          </li>
        </ul>
        <p>
          <span className="font-semibold">Analogy:</span> Think of event
          delegation like a single bouncer at a club entrance, checking everyone
          who comes in, instead of having a bouncer at every room.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          More Practical Example: Delegating Button Clicks
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// HTML
<div id="container">
  <button id="btn1">Button 1</button>
  <button id="btn2">Button 2</button>
</div>

// JavaScript
const container = document.getElementById('container');
container.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    console.log(\`\${e.target.id} clicked!\`);
  }
});
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Only one listener is attached to <code>#container</code>, handling
            all child button clicks.
          </li>
          <li>Works for existing and dynamically added buttons.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Best Practices and Considerations
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Use event delegation for lists, tables, menus, or any repeating
            elements.
          </li>
          <li>
            Always check <code>event.target</code> to ensure the event is from
            the correct child element (not the parent itself).
          </li>
          <li>Be mindful of event bubbling for deeply nested structures.</li>
          <li>
            Event delegation works best with events that bubble (e.g.,{" "}
            <code>click</code>, <code>keyup</code>), but not all events bubble
            (e.g., <code>blur</code>, <code>focus</code>).
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// HTML
<ul id="colors">
  <li>Red</li>
  <li>Green</li>
  <li>Blue</li>
</ul>

// JavaScript
document.getElementById('colors').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.style.backgroundColor = 'yellow';
    console.log(event.target.textContent + ' clicked');
  }
});
`}</code>
        </pre>
      </section>
    </div>
  );
}
