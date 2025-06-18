export default function DOMManipulationGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        2.1 DOM Manipulation in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is the DOM?</h3>
        <p>
          The <span className="font-semibold">DOM</span> (Document Object Model)
          is a programming interface for web documents. It represents the page
          as a tree of nodes, allowing JavaScript to read, modify, and update
          content, structure, and styles dynamically.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Selecting Elements</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">getElementById</span>: Selects an
            element by its ID.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const title = document.getElementById("main-title");`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">querySelector</span>: Selects the
            first element that matches a CSS selector.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const firstParagraph = document.querySelector(".intro");`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">querySelectorAll</span>: Selects all
            elements matching a CSS selector (returns a NodeList).
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const allItems = document.querySelectorAll("li");`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">getElementsByClassName</span> and{" "}
            <span className="font-semibold">getElementsByTagName</span>: Select
            elements by class or tag name (returns HTMLCollection).
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const menuItems = document.getElementsByClassName("menu-item");
const paragraphs = document.getElementsByTagName("p");`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Reading and Changing Content
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">innerHTML</span>: Gets or sets the
            HTML content inside an element.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`title.innerHTML = "Welcome to <strong>JavaScript</strong>!";`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">textContent</span>: Gets or sets the
            plain text content.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`firstParagraph.textContent = "This is the intro.";`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">value</span>: For form elements,
            gets or sets the value.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const input = document.querySelector("input");
input.value = "New value";`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Changing Attributes and Styles
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">setAttribute / getAttribute</span>:
            Set or get any attribute.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`firstParagraph.setAttribute("data-info", "active");
console.log(firstParagraph.getAttribute("data-info")); // "active"`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">style</span>: Change inline CSS
            styles.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`title.style.color = "tomato";
title.style.fontWeight = "bold";`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">classList</span>: Add, remove, or
            toggle CSS classes.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`title.classList.add("highlight");
title.classList.remove("old-class");
title.classList.toggle("active");`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Creating and Removing Elements
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">createElement</span>: Create a new
            element.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const newDiv = document.createElement("div");`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">appendChild / removeChild</span>:
            Add or remove elements in the DOM.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`document.body.appendChild(newDiv);
document.body.removeChild(newDiv);`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>
          Predict the result of the following code snippet, assuming the HTML
          contains <code>&lt;div id="box"&gt;Hello&lt;/div&gt;</code>:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const box = document.getElementById("box");
box.textContent = "World";
box.style.backgroundColor = "yellow";
box.classList.add("rounded");
console.log(box.innerHTML);`}</code>
        </pre>
      </section>
    </div>
  );
}
