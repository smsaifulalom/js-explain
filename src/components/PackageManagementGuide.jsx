export default function PackageManagementGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        5.4 NPM & Yarn: Package Management Basics
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What is a Package Manager?
        </h3>
        <p>
          A <span className="font-semibold">package manager</span> like{" "}
          <code>npm</code> (Node Package Manager) or <code>Yarn</code> helps you
          install, update, and manage third-party code libraries (“packages”)
          for your JavaScript/Node.js projects. It automates dependency
          management, versioning, and scripts, making development faster and
          more reliable.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Initializing a Project</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">npm:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`npm init # step-by-step wizard
npm init -y # quick default package.json`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Yarn:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`yarn init`}</code>
            </pre>
          </li>
        </ul>
        <p>
          This creates a <code>package.json</code> file, the “source of truth”
          for your project’s metadata, dependencies, and scripts.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Installing Packages</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Add a dependency:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`npm install lodash
yarn add lodash`}</code>
            </pre>
            <p>
              Installs <code>lodash</code> and adds it to{" "}
              <code>dependencies</code> in <code>package.json</code>. Packages
              are stored in <code>node_modules</code>.<br />
              Use <code>--save-dev</code> (<code>-D</code> for npm/yarn) for
              development-only dependencies (e.g., testing tools).
            </p>
          </li>
          <li>
            <span className="font-semibold">Install all dependencies:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`npm install
yarn install`}</code>
            </pre>
            <p>
              Installs everything listed in <code>package.json</code>.<br />
              <code>yarn install --frozen-lockfile</code> ensures exact versions
              from <code>yarn.lock</code> are used.
            </p>
          </li>
          <li>
            <span className="font-semibold">Remove a package:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`npm uninstall lodash
yarn remove lodash`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Updating & Versioning</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Update all packages:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`npm update
yarn upgrade`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Update a specific package:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`npm update lodash
yarn upgrade lodash`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Install a specific version:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`npm install lodash@4.17.21
yarn add lodash@4.17.21`}</code>
            </pre>
            <p>
              Versioning follows <span className="font-semibold">semver</span>{" "}
              (semantic versioning): <code>major.minor.patch</code>.<br />
              You can specify version ranges (e.g., <code>^1.2.3</code>,{" "}
              <code>~1.2.3</code>).
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Scripts and Automation</h3>
        <p>
          Both npm and Yarn let you define scripts in <code>package.json</code>{" "}
          for common tasks:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`"scripts": {
  "start": "node index.js",
  "dev": "webpack --watch",
  "test": "jest"
}`}</code>
        </pre>
        <p>Run scripts with:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
          <code>{`npm run dev
yarn dev`}</code>
        </pre>
        <p>
          Scripts automate tasks like building, testing, and running development
          servers.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Lockfiles and Dependency Consistency
        </h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">npm:</span> Uses{" "}
            <code>package-lock.json</code> to lock dependency versions.
          </li>
          <li>
            <span className="font-semibold">Yarn:</span> Uses{" "}
            <code>yarn.lock</code> for the same purpose.
          </li>
          <li>
            Lockfiles ensure all team members have the exact same dependency
            versions, preventing "works on my machine" problems.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          NPM vs. Yarn: Key Differences
        </h3>
        <table className="table-auto w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b p-2">Feature</th>
              <th className="border-b p-2">NPM</th>
              <th className="border-b p-2">Yarn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Default with Node.js</td>
              <td className="p-2">Yes</td>
              <td className="p-2">No (install separately)</td>
            </tr>
            <tr>
              <td className="p-2">Speed</td>
              <td className="p-2">Good, improved in v7+</td>
              <td className="p-2">Faster, better caching & offline support</td>
            </tr>
            <tr>
              <td className="p-2">Lockfile</td>
              <td className="p-2">package-lock.json</td>
              <td className="p-2">yarn.lock</td>
            </tr>
            <tr>
              <td className="p-2">Workspaces</td>
              <td className="p-2">Basic</td>
              <td className="p-2">First-class support</td>
            </tr>
            <tr>
              <td className="p-2">Offline Support</td>
              <td className="p-2">Limited</td>
              <td className="p-2">Excellent</td>
            </tr>
            <tr>
              <td className="p-2">Popularity</td>
              <td className="p-2">Most widely used</td>
              <td className="p-2">Popular for monorepos and speed</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Example: Installing and Using a Package
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Install the "upper-case" package
npm install upper-case
yarn add upper-case

// Use the package in Node.js
const uc = require('upper-case');
console.log(uc.upperCase('Hello World!')); // Output: HELLO WORLD!
`}</code>
        </pre>
        <p>
          This example demonstrates installing and using a package to transform
          text to uppercase<sup>[6]</sup>.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>
          What happens if you run <code>npm install</code> or{" "}
          <code>yarn install</code> in a project that already has a{" "}
          <code>package.json</code> and a lockfile? What is the difference
          between <code>dependencies</code> and <code>devDependencies</code> in{" "}
          <code>package.json</code>?
        </p>
      </section>
    </div>
  );
}
