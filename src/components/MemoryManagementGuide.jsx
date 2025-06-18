export default function MemoryManagementGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        4.6 Memory Management and Garbage Collection Basics in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What is Memory Management?
        </h3>
        <p>
          <span className="font-semibold">Memory management</span> is the
          process of allocating, using, and freeing up memory resources in your
          application. In JavaScript, this process is mostly automatic thanks to
          the garbage collector, but understanding how it works is crucial for
          writing efficient, leak-free code.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Allocation:</strong> Memory is allocated when variables,
            objects, or functions are created.
          </li>
          <li>
            <strong>Usage:</strong> The program uses the allocated memory during
            execution.
          </li>
          <li>
            <strong>Release:</strong> Memory is released (freed) when it is no
            longer needed and is collected by the garbage collector.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Stack vs. Heap Memory</h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>Stack Memory:</strong> For static allocation (primitive
            types like numbers, strings, booleans). Fast and automatically
            managed.
          </li>
          <li>
            <strong>Heap Memory:</strong> For dynamic allocation (objects,
            arrays, functions). Managed by the garbage collector.
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`let num = 42; // Allocated on the stack
let obj = { a: 1 }; // Allocated on the heap
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          How Garbage Collection Works
        </h3>
        <p>
          JavaScript uses <strong>automatic garbage collection</strong> to
          reclaim memory that is no longer referenced. The most common algorithm
          is <span className="font-semibold">mark-and-sweep</span>:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Mark phase:</strong> The garbage collector starts from root
            objects (global variables, current function stack) and marks all
            reachable objects as "in use".
          </li>
          <li>
            <strong>Sweep phase:</strong> It then sweeps through memory and
            frees any objects not marked as in use (unreachable objects).
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`let user = { name: "Alice" }; // Allocated
user = null; // Now unreachable, eligible for garbage collection
`}</code>
        </pre>
        <p>
          Some engines also use <strong>generational garbage collection</strong>{" "}
          for further optimization.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Common Causes of Memory Leaks
        </h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>Uncleared timers and intervals:</strong> Always clear
            intervals and timeouts when no longer needed.
          </li>
          <li>
            <strong>Unremoved event listeners:</strong> Remove listeners when
            elements are removed or components unmount.
          </li>
          <li>
            <strong>Closures holding references:</strong> Closures can
            inadvertently keep objects in memory.
          </li>
          <li>
            <strong>Detached DOM nodes:</strong> DOM elements removed from the
            page but still referenced in JavaScript.
          </li>
          <li>
            <strong>Global variables:</strong> Minimize use of global variables
            to avoid accidental retention.
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Example: Memory leak from event listener
function attachListener() {
  const el = document.createElement('div');
  function onClick() { console.log('clicked'); }
  el.addEventListener('click', onClick);
  // If el is removed from DOM but still referenced, memory leak!
}
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Best Practices for Memory Management
        </h3>
        <ul className="list-disc list-inside">
          <li>Use local scope for variables; avoid unnecessary globals.</li>
          <li>
            Remove event listeners and clear timers in cleanup functions
            (especially in frameworks like React).
          </li>
          <li>
            Use <code>WeakMap</code> and <code>WeakSet</code> for cache or
            temporary object storage—they allow garbage collection of keys when
            no longer referenced.
          </li>
          <li>
            Profile memory usage regularly with Chrome DevTools or Node.js
            tools.
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Example: Using WeakMap for cache
const cache = new WeakMap();
let obj = { id: 1 };
cache.set(obj, "Some data");
// When obj = null, it can be garbage collected, and so can its cache entry
obj = null;
`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Memory Profiling Example (Node.js)
        </h3>
        <p>
          Use <code>process.memoryUsage()</code> in Node.js to monitor memory:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`console.log(process.memoryUsage());
/*
{
  rss: 26247168,
  heapTotal: 5767168,
  heapUsed: 3667584,
  external: 8707,
  ...
}
*/
`}</code>
        </pre>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`let obj = { name: "Sam" };
let arr = [obj];
obj = null;
console.log(arr[0]);
arr = null;
// At this point, is the original object eligible for garbage collection? Why or why not?
`}</code>
        </pre>
      </section>
    </div>
  );
}
