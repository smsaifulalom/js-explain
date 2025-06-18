export default function ModulesGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        3.8 Modules (<code>import</code> / <code>export</code>) in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What Are JavaScript Modules?
        </h3>
        <p>
          <span className="font-semibold">Modules</span> allow you to break up
          your code into separate files, making your codebase easier to
          organize, maintain, and reuse. Each module can export variables,
          functions, classes, or objects, and other modules can import and use
          them.
          <br />
          Modules use the <code>import</code> and <code>export</code> keywords
          and must be loaded with <code>type="module"</code> in the HTML{" "}
          <code>&lt;script&gt;</code> tag or run in a module-supporting
          environment.
          <br />
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Exporting from a Module</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Named Exports:</span> Export
            multiple variables, functions, or classes by name. You can export
            them individually or all at once at the bottom of the file.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`// person.js
export const name = "Jesse";
export const age = 40;

// OR
const name = "Jesse";
const age = 40;
export { name, age };`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Default Export:</span> Each module
            can have only one default export. Export a single value (function,
            class, object, etc.).
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`// message.js
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + ' years old.';
};
export default message;`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Importing from a Module</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Named Imports:</span> Use curly
            braces to import specific exports by name.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`import { name, age } from "./person.js";`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Default Import:</span> Import the
            default export without curly braces.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`import message from "./message.js";`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Namespace Import:</span> Import all
            exports as properties of an object.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`import * as Person from "./person.js";
console.log(Person.name); // "Jesse"
console.log(Person.age);  // 40`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Side Effect Import:</span> Import a
            module for its side effects only, without importing any bindings.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`import "./setup.js";`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Export/Import Syntax Variations
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Export before declaration:{" "}
            <code>export function greet() {"{ /* function body */ }"}</code>
          </li>
          <li>
            Export after declaration:{" "}
            <code>
              function greet() {"{ /* function body */ }"} export {"{ greet }"}
            </code>
          </li>
          <li>
            Re-export: <code>export {"{ greet }"} from "./other.js"</code>
          </li>
          <li>
            Import with alias:{" "}
            <code>import {"{ name as userName }"} from "./person.js"</code>
          </li>
          <li>
            Default import with named:{" "}
            <code>import message, {name} from "./message.js"</code>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">How Modules Work</h3>
        <ul className="list-disc list-inside">
          <li>
            Modules are loaded asynchronously and only once, even if imported
            multiple times.
          </li>
          <li>
            Imports are read-only views of the exported values (except for
            objects, which can be mutated).
          </li>
          <li>
            Import/export statements must be at the top level (not inside
            functions or blocks).
          </li>
          <li>
            Modules use strict mode (<code>"use strict"</code>) by default.
          </li>
          <li>
            Modules are scoped: variables declared in a module are not global.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Modules in HTML and React
        </h3>
        <ul className="list-disc list-inside">
          <li>
            In HTML, use <code>&lt;script type="module"&gt;</code> to enable
            module syntax.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`<script type="module">
import { name } from './person.js';
</script>`}</code>
            </pre>
          </li>
          <li>
            In React (or Node.js with ES modules), use <code>import</code> and{" "}
            <code>export</code> directly in your .js/.jsx files.
            <br />
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>
          Predict the output of the following code snippets and explain why:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// person.js
export const name = "Jesse";
export const age = 40;

// message.js
const message = () => \`\${name} is \${age} years old.\`;
export default message;

// main.js
import { name, age } from "./person.js";
import message from "./message.js";

console.log(name);
console.log(age);
console.log(message());`}</code>
        </pre>
        <p className="mt-2">
          <span className="font-semibold">Bonus:</span> What happens if you try
          to import a named export as a default import, or vice versa?
        </p>
      </section>
    </div>
  );
}
