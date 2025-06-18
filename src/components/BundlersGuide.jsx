export default function BundlersGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        5.3 JavaScript Bundlers: Webpack, Parcel, and Vite
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is a Bundler?</h3>
        <p>
          A <span className="font-semibold">bundler</span> is a tool that takes
          your JavaScript (and other assets like CSS, images, etc.), analyzes
          their dependencies, and combines them into optimized files for the
          browser. This reduces HTTP requests, enables advanced optimizations,
          and improves performance and maintainability.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Minification:</strong> Removes unnecessary code to reduce
            file size.
          </li>
          <li>
            <strong>Transpiling:</strong> Converts modern JavaScript (ES6+) to
            code that works in older browsers.
          </li>
          <li>
            <strong>Code Splitting:</strong> Loads only the code needed for a
            given page, improving load times.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Webpack</h3>
        <p>
          <span className="font-semibold">Webpack</span> is the most popular and
          flexible JavaScript bundler, ideal for large and complex projects. It
          uses a configuration file to define <strong>entry</strong> points,{" "}
          <strong>output</strong> files, <strong>loaders</strong> for non-JS
          assets, and <strong>plugins</strong> for advanced features.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// webpack.config.js
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    // Add plugins here
  ]
};`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Highly customizable with an extensive plugin and loader ecosystem.
          </li>
          <li>
            Supports code splitting, tree-shaking, and Hot Module Replacement
            (HMR).
          </li>
          <li>
            Best for large, complex applications needing fine-grained control.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Parcel</h3>
        <p>
          <span className="font-semibold">Parcel</span> is a "zero-config"
          bundler, designed for simplicity and rapid development. It
          automatically detects dependencies and configures most things for you.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Install Parcel
npm install --save-dev parcel

// Add to package.json scripts
"scripts": {
  "dev": "parcel src/index.html",
  "build": "parcel build src/index.html"
}

// Run dev server
npm run dev
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Minimal setup—just point Parcel at your entry HTML or JS file.
          </li>
          <li>Automatic asset handling (JS, CSS, images, etc.).</li>
          <li>Great for small to medium projects or rapid prototyping.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Vite</h3>
        <p>
          <span className="font-semibold">Vite</span> is a modern bundler
          focused on speed and simplicity, especially for modern frameworks
          (React, Vue, Svelte, etc.). It serves files using native ES modules
          during development (for instant startup and fast hot reloads), and
          bundles for production using Rollup.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Create a new Vite project
npm create vite@latest my-vite-app
cd my-vite-app
npm install
npm run dev
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Blazing fast dev server and HMR.</li>
          <li>Minimal config, but supports advanced customization.</li>
          <li>Tree-shaking and code splitting via Rollup for production.</li>
          <li>Best for modern, fast-moving projects and frameworks.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Feature Comparison Table</h3>
        <table className="table-auto w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b p-2">Feature</th>
              <th className="border-b p-2">Webpack</th>
              <th className="border-b p-2">Parcel</th>
              <th className="border-b p-2">Vite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Configuration</td>
              <td className="p-2">Complex, flexible</td>
              <td className="p-2">Zero-config, simple</td>
              <td className="p-2">Minimal, readable</td>
            </tr>
            <tr>
              <td className="p-2">Dev Speed</td>
              <td className="p-2">Slower</td>
              <td className="p-2">Fast</td>
              <td className="p-2">Very fast</td>
            </tr>
            <tr>
              <td className="p-2">Best for</td>
              <td className="p-2">Large, complex apps</td>
              <td className="p-2">Small/medium apps, prototyping</td>
              <td className="p-2">Modern frameworks, fast dev</td>
            </tr>
            <tr>
              <td className="p-2">Plugin Ecosystem</td>
              <td className="p-2">Huge</td>
              <td className="p-2">Growing</td>
              <td className="p-2">Growing</td>
            </tr>
            <tr>
              <td className="p-2">Production Bundler</td>
              <td className="p-2">Webpack</td>
              <td className="p-2">Parcel</td>
              <td className="p-2">Rollup</td>
            </tr>
            <tr>
              <td className="p-2">Tree-shaking</td>
              <td className="p-2">Yes</td>
              <td className="p-2">Yes</td>
              <td className="p-2">Yes (via Rollup)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Best Practices & Use Cases
        </h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>Webpack:</strong> Choose for large, complex projects needing
            advanced configuration, code splitting, and plugin support.
          </li>
          <li>
            <strong>Parcel:</strong> Choose for simple, quick setups and rapid
            prototyping with minimal config.
          </li>
          <li>
            <strong>Vite:</strong> Choose for modern frameworks and when you
            want the fastest dev experience and optimized production builds.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>
          Predict what happens when you run <code>npm run dev</code> in a Vite
          project and <code>npm run build</code> in a Webpack project. Explain
          why the dev server experience is different between Vite and Webpack.
        </p>
      </section>
    </div>
  );
}
