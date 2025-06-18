export default function ESLintGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        5.2 Linting with ESLint in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is ESLint?</h3>
        <p>
          <span className="font-semibold">ESLint</span> is a pluggable and
          configurable JavaScript linter that analyzes your code for errors,
          stylistic issues, and potential bugs. It helps keep code consistent,
          readable, and less error-prone by enforcing rules and reporting
          problems as you write or before you deploy.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Identifies and reports on patterns found in ECMAScript/JavaScript
            code<sup>[1]</sup>.
          </li>
          <li>
            Helps maintain code quality and coding standards across teams
            <sup>[3][5]</sup>.
          </li>
          <li>
            Supports plugins, custom rules, and integration with editors and
            CI/CD pipelines.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Setting Up ESLint</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <span className="font-semibold">Install Node.js</span> (required for
            ESLint).
          </li>
          <li>
            <span className="font-semibold">
              Install ESLint in your project:
            </span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
              <code>{`npm install eslint --save-dev`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">
              Initialize ESLint configuration:
            </span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
              <code>{`npx eslint --init`}</code>
            </pre>
            <p>
              Answer prompts to pick your style guide, environment
              (browser/Node), and language features. This creates a{" "}
              <code>.eslintrc</code> config file.
            </p>
          </li>
          <li>
            <span className="font-semibold">Run ESLint on your code:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
              <code>{`npx eslint yourfile.js`}</code>
            </pre>
          </li>
        </ol>
        <p>
          You can also use <code>npm init @eslint/config</code> or equivalent
          commands for Yarn, pnpm, or Bun.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">How ESLint Works</h3>
        <ul className="list-disc list-inside">
          <li>
            Reads your code and checks it against a set of{" "}
            <strong>rules</strong> (e.g., no unused variables, consistent
            spacing).
          </li>
          <li>
            Rules can be turned <code>off</code>, set to <code>warn</code>{" "}
            (shows a warning), or <code>error</code> (fails the lint step).
          </li>
          <li>
            Rules, plugins, and environments are configured in{" "}
            <code>.eslintrc</code> or <code>eslint.config.js</code> files .
          </li>
          <li>
            Supports <strong>auto-fixing</strong> many issues using{" "}
            <code>--fix</code> option.
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// .eslintrc.js example
module.exports = {
  env: { browser: true, es2021: true },
  extends: ["eslint:recommended", "airbnb-base"],
  rules: {
    "no-unused-vars": "warn",
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
};`}</code>
        </pre>
        <p>
          In this example, <code>no-unused-vars</code> is a warning,{" "}
          <code>semi</code> and <code>quotes</code> are errors. ESLint will
          report issues accordingly.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Integrating ESLint into Your Workflow
        </h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Editor Integration:</span> Use
            ESLint plugins for VSCode, Atom, WebStorm, etc., to see linting
            feedback as you type.
          </li>
          <li>
            <span className="font-semibold">Auto-fix on save:</span> Many
            editors support auto-fixing issues when you save a file.
          </li>
          <li>
            <span className="font-semibold">CI/CD Integration:</span> Run ESLint
            in your build pipeline to catch issues before merging or deploying.
          </li>
          <li>
            <span className="font-semibold">Pre-commit hooks:</span> Use tools
            like Husky to run ESLint before code is committed.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Plugins, Shareable Configs, and Customization
        </h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Plugins:</span> Extend ESLint for
            React, TypeScript, Vue, etc. (<code>eslint-plugin-react</code>,{" "}
            <code>@typescript-eslint/eslint-plugin</code>).
          </li>
          <li>
            <span className="font-semibold">Shareable configs:</span> Use
            popular style guides like Airbnb, Standard, or Google for consistent
            code style across teams.
          </li>
          <li>
            <span className="font-semibold">Custom rules:</span> Define your own
            rules to enforce project-specific standards.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Example: Linting Code and Auto-fixing
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Example JavaScript file (bad.js)
const name = 'Sam'
if(true) {
  console.log("Lint me!");
}

// Lint and auto-fix:
npx eslint bad.js --fix
// ESLint will fix the missing semicolon and other issues if possible.
`}</code>
        </pre>
        <p>
          ESLint highlights issues and can fix many of them automatically,
          making code cleaner and more consistent.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>
          What issues will ESLint report for the following code if the{" "}
          <code>no-unused-vars</code> and <code>semi</code> rules are enabled?
          Why?
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function greet(name) {
  const greeting = "Hello, " + name
  return "Welcome!"
}`}</code>
        </pre>
      </section>
    </div>
  );
}
