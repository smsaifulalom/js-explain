export default function UnitTestingGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        6.1 Writing Simple Unit Tests (Jest & Mocha Basics)
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is Unit Testing?</h3>
        <p>
          <span className="font-semibold">Unit testing</span> means writing code
          to automatically check that small, isolated pieces of your code
          (units, like functions or classes) work as expected. Unit tests help
          catch bugs early, improve code maintainability, and serve as
          documentation for how code should behave.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Tests are typically grouped in <code>describe</code> blocks and use{" "}
            <code>it</code> or <code>test</code> for individual cases.
          </li>
          <li>
            Assertions use <code>expect</code> (Jest) or{" "}
            <code>expect/assert</code> (Mocha/Chai) to compare results to
            expected values.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Jest Basics</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Installation:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
              <code>{`npm install --save-dev jest
# or
yarn add --dev jest`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Writing a Test:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
              <code>{`// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
  it('adds negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});
`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Running Tests:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
              <code>{`npx jest`}</code>
            </pre>
            <p>
              Jest will automatically find files ending in <code>.test.js</code>{" "}
              or <code>.spec.js</code> and run the tests.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Mocha & Chai Basics</h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">Installation:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
              <code>{`npm install --save-dev mocha chai
# or
yarn add --dev mocha chai`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Writing a Test:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
              <code>{`// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');
const { expect } = require('chai');

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(2, 3)).to.equal(5);
  });
  it('adds negative numbers', () => {
    expect(sum(-2, -3)).to.equal(-5);
  });
});
`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Running Tests:</span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm">
              <code>{`npx mocha`}</code>
            </pre>
            <p>
              Mocha will find files ending in <code>.test.js</code> or specified
              in your config and run the tests.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Test Structure and Matchers
        </h3>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-semibold">describe:</span> Groups related
            tests.
          </li>
          <li>
            <span className="font-semibold">it/test:</span> Defines a single
            test case.
          </li>
          <li>
            <span className="font-semibold">expect:</span> Makes assertions
            about the result.
          </li>
          <li>
            <span className="font-semibold">Matchers:</span> <code>toBe</code>,{" "}
            <code>toEqual</code>, <code>toBeTruthy</code>, <code>toThrow</code>,
            etc.
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Example: Testing an isEven function with Jest
function isEven(n) {
  if (typeof n !== 'number' || n < 0) throw new Error('Invalid input');
  return n % 2 === 0;
}

describe('isEven', () => {
  test('returns true if number is even', () => {
    expect(isEven(2)).toBe(true);
  });
  test('returns false if number is odd', () => {
    expect(isEven(3)).toBe(false);
  });
  test('throws error for negative', () => {
    expect(() => isEven(-1)).toThrow();
  });
  test('throws error for non-number', () => {
    expect(() => isEven('1')).toThrow();
  });
});
`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice T≈ask</h3>
        <p>
          Given the following function, write a simple Jest test suite that
          checks:
        </p>
        <ul className="list-disc list-inside">
          <li>Adding two positive numbers returns the correct sum</li>
          <li>
            Adding a positive and a negative number returns the correct sum
          </li>
          <li>Adding zero returns the correct sum</li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// add.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// Write your Jest test suite for 'add' here.
`}</code>
        </pre>
      </section>
    </div>
  );
}
