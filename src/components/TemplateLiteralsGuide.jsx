export default function TemplateLiteralsGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        3.4 Template Literals in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What are Template Literals?
        </h3>
        <p>
          <span className="font-semibold">Template literals</span> (also called
          template strings) are string literals introduced in ES6 that allow
          embedded expressions, multi-line strings, and easier string
          formatting. They are enclosed by backticks (<code>`</code>) instead of
          single (<code>'</code>) or double quotes (<code>"</code>).
        </p>
        <ul className="list-disc list-inside">
          <li>
            Support string interpolation (insert variables/expressions directly
            in strings)
          </li>
          <li>Allow multi-line strings without special characters</li>
          <li>
            Make it easy to include both single and double quotes inside a
            string
          </li>
          <li>
            Support <span className="font-semibold">tagged templates</span> for
            advanced use cases
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Basic Syntax</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const message = \`Hello, world!\`;
const name = "Alice";
const greeting = \`Hello, \${name}!\`; // "Hello, Alice!"
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Use backticks: <code>` ... `</code>
          </li>
          <li>
            Insert variables or expressions with <code>${"{expression}"}</code>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">String Interpolation</h3>
        <p>
          Insert variables or any JavaScript expression directly into your
          string:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const a = 5, b = 3;
const sum = \`The sum of \${a} and \${b} is \${a + b}.\`;
console.log(sum); // "The sum of 5 and 3 is 8."
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Any valid JavaScript expression can go inside{" "}
            <code>${"{...}"}</code> (variables, math, function calls, etc.)
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Multi-line Strings</h3>
        <p>
          Template literals allow multi-line strings without needing escape
          characters or concatenation.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const poem = \`Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!\`;
console.log(poem);
// Output:
// Roses are red,
// Violets are blue,
// JavaScript is awesome,
// And so are you!
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Quotes Inside Template Literals
        </h3>
        <p>
          You can use both single and double quotes inside template literals
          without escaping:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const text = \`He said, "It's JavaScript!"\`;
console.log(text); // He said, "It's JavaScript!"
`}</code>
        </pre>
        <p>
          To include a backtick inside a template literal, escape it with a
          backslash: <code>\\`</code>
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Tagged Templates (Advanced)
        </h3>
        <p>
          Tagged templates let you parse template literals with a function for
          advanced formatting or processing. The tag function receives the
          string parts and values as arguments.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function highlight(strings, ...values) {
  return strings.reduce((result, str, i) =>
    result + str + (values[i] ? '<strong>' + values[i] + '</strong>' : ''), '');
}
const name = "Nike";
const slogan = highlight\`Just do it with \${name}!\`;
console.log(slogan); // Just do it with <strong>Nike</strong>!
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
        <ul className="list-disc list-inside">
          <li>
            Use template literals for strings with variables, expressions, or
            multi-line content.
          </li>
          <li>
            For simple, static strings, single or double quotes are fine for
            consistency.
          </li>
          <li>
            Template literals are ideal for generating dynamic HTML, logs, and
            formatted messages.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const firstName = "Sam";
const notifications = 5;
const message = \`Hello, \${firstName}! You have \${notifications > 0 ? notifications : "no"} new notifications.\`;
console.log(message);

const multi = \`Line 1
Line 2
Line 3\`;
console.log(multi);`}</code>
        </pre>
      </section>
    </div>
  );
}
