export default function AccessibilityJSGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        7.2 Basic Accessibility Concepts in JavaScript Interactions
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Why Accessibility Matters in JavaScript
        </h3>
        <p>
          JavaScript-powered features—like modals, custom buttons, dropdowns,
          and dynamic content—can easily break accessibility if not implemented
          thoughtfully. Accessible JS ensures your site works for everyone,
          including keyboard-only users, screen reader users, and people with
          other disabilities.
        </p>
        <ul className="list-disc list-inside">
          <li>
            All interactive elements must be usable with a keyboard, not just a
            mouse.
          </li>
          <li>
            Use semantic HTML whenever possible (e.g.,{" "}
            <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>), which comes
            with built-in accessibility.
          </li>
          <li>
            Provide text alternatives for images and dynamic content
            <sup>[1]</sup>.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Keyboard Accessibility: Events and Focus
        </h3>
        <p>
          Many users navigate via keyboard (Tab, Enter, Space, Arrow keys).
          JavaScript interactions must be operable with these keys.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Semantic elements:</span>{" "}
            <code>&lt;button&gt;</code> and <code>&lt;a&gt;</code> are
            automatically focusable and respond to keyboard events.
          </li>
          <li>
            <span className="font-semibold">Non-semantic elements:</span> If you
            must use <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> for
            custom controls, add <code>tabIndex="0"</code> to make them
            focusable, and use <code>role</code> and ARIA attributes for
            semantics.
          </li>
          <li>
            <span className="font-semibold">Keyboard event handlers:</span>{" "}
            Listen for <code>keydown</code> or <code>keyup</code> events to
            trigger actions on Enter (key 13) or Space (key 32).
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Accessible custom button
<div
  role="button"
  tabIndex={0}
  onClick={() => alert('Activated!')}
  onKeyDown={e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.target.click();
    }
  }}
  className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
>
  Custom Button
</div>
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            <code>tabIndex={0}</code> makes the div focusable by keyboard.
          </li>
          <li>
            <code>role="button"</code> signals to assistive tech that this is a
            button.
          </li>
          <li>Handles both mouse and keyboard activation (Enter/Space).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Device-Independent Event Handling
        </h3>
        <p>
          Don’t rely solely on mouse events like <code>onMouseOver</code> or{" "}
          <code>onClick</code>. Pair them with keyboard events to ensure
          everyone can use your features.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Example: Show a zoomed image on mouse or keyboard focus
<img
  src="thumb.jpg"
  alt="Product thumbnail"
  tabIndex={0}
  onMouseOver={() => showZoomedImage()}
  onFocus={() => showZoomedImage()}
  onMouseOut={() => hideZoomedImage()}
  onBlur={() => hideZoomedImage()}
/>
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Both mouse and keyboard (focus/blur) events trigger the same
            actions.
          </li>
          <li>
            Ensures users who tab to the image get the same experience as mouse
            users.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          ARIA Roles, States, and Properties
        </h3>
        <p>
          Use ARIA (Accessible Rich Internet Applications) attributes to
          communicate roles and states to assistive technologies, especially for
          dynamic or custom widgets.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>role="button"</code>, <code>role="dialog"</code>,{" "}
            <code>role="menu"</code> for custom controls.
          </li>
          <li>
            <code>aria-pressed</code>, <code>aria-expanded</code>,{" "}
            <code>aria-hidden</code> to reflect state changes (e.g., toggles,
            dropdowns).
          </li>
          <li>
            <code>aria-live</code> regions to announce dynamic content updates
            to screen readers<sup>[5]</sup>.
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Accessible toggle button with ARIA
<button
  aria-pressed={isActive}
  onClick={() => setIsActive(!isActive)}
  className={isActive ? "bg-green-600" : "bg-gray-400"}
>
  {isActive ? "Active" : "Inactive"}
</button>
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Screen readers will announce the toggle’s state as “pressed” or “not
            pressed”.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Focus Management for Dynamic Content
        </h3>
        <p>
          When showing modals, popups, or dynamically updating content, move
          focus to the new content and restore it when closing. Trap focus
          inside modals so keyboard users don’t accidentally tab out.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Set initial focus to the first interactive element in the modal.
          </li>
          <li>
            Restore focus to the triggering element when the modal closes.
          </li>
          <li>
            Use <code>aria-live</code> for dynamic updates so screen readers are
            notified.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>
          Predict the accessibility outcome of the following code and explain
          what is accessible and what is not. Suggest improvements.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`<div
  onClick={() => alert('Clicked!')}
  className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
>
  Clickable Box
</div>
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Can keyboard users activate this element?</li>
          <li>Will screen readers recognize it as a button?</li>
          <li>How would you make it fully accessible?</li>
        </ul>
      </section>
    </div>
  );
}
