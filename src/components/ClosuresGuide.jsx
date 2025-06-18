export default function ClosuresGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">1.10 Closures</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is a Closure?</h3>
        <p>
          A <span className="font-semibold">closure</span> is a feature in
          JavaScript where an inner function has access to the variables of its
          outer (enclosing) function, even after the outer function has finished
          executing.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Closures allow functions to "remember" the environment in which they
            were created.
          </li>
          <li>
            This is a fundamental concept for data privacy, callbacks, and
            functional programming.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">How Closures Work</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function outer() {
  let outerVar = "I'm from outside!";
  function inner() {
    return outerVar;
  }
  return inner;
}

const myFunc = outer();
console.log(myFunc()); // Output: "I'm from outside!"
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            <code>inner</code> is a closure that "remembers"{" "}
            <code>outerVar</code> even after <code>outer()</code> has finished.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Common Uses of Closures</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Data Privacy:</span> Variables in
            closures are not accessible from outside.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`function secretHolder(secret) {
  return function() {
    return secret;
  };
}
const getSecret = secretHolder("JS is fun!");
console.log(getSecret()); // "JS is fun!"`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">Function Factories:</span> Functions
            that return other functions with preset arguments.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">setTimeout in Loops:</span> Closures
            help preserve the value of variables in asynchronous code.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // Logs 4 three times!
  }, i * 1000);
}`}</code>
            </pre>
            <p className="mt-1">
              Using <code>let</code> instead of <code>var</code> fixes this
              because <code>let</code> is block-scoped:
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // Logs 1, 2, 3
  }, i * 1000);
}`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Visualizing Closures</h3>
        <p>
          Think of a closure as a backpack: when a function is created, it
          "packs up" all the variables it needs from its surrounding scope and
          carries them with it, even if that scope has finished executing.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log(counter1());
console.log(counter1());

const counter2 = makeCounter();
console.log(counter2());`}</code>
        </pre>
      </section>
    </div>
  );
}
