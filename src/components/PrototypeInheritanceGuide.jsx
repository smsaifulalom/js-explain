export default function PrototypeInheritanceGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        2.3 JavaScript Object Model: Prototype Inheritance
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          What is Prototype Inheritance?
        </h3>
        <p>
          <span className="font-semibold">Prototype inheritance</span> is the
          core mechanism by which JavaScript objects inherit features from one
          another. Unlike classical inheritance (classes inheriting from
          classes), JavaScript uses a{" "}
          <span className="font-semibold">prototype chain</span> where objects
          inherit directly from other objects.
          <br />
          Each object has an internal link to another object called its{" "}
          <code>prototype</code>. When you access a property or method on an
          object, JavaScript first looks for it on the object itself, then up
          the prototype chain until it finds it or reaches <code>null</code> (
          <code>Object.prototype</code> is the top of the chain)
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          How Prototype Inheritance Works
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Every object (except <code>null</code>) has a hidden internal
            property called <code>[[Prototype]]</code> (accessible via{" "}
            <code>__proto__</code> or <code>Object.getPrototypeOf()</code>).
          </li>
          <li>
            If a property or method isn’t found on the object, JavaScript looks
            for it on the object's prototype, then the prototype’s prototype,
            and so on—this is called the{" "}
            <span className="font-semibold">prototype chain</span>
          </li>
          <li>
            The root of the chain is <code>Object.prototype</code>, whose
            prototype is <code>null</code>
          </li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`const animal = {
  eats: true
};
const rabbit = {
  jumps: true
};

// Set up prototype inheritance
rabbit.__proto__ = animal;

console.log(rabbit.eats); // true (from animal)
console.log(rabbit.jumps); // true (own property)
`}</code>
        </pre>
        <p>
          <span className="font-semibold">Note:</span> The{" "}
          <code>__proto__</code> property is widely supported but not
          recommended for production code. Prefer <code>Object.create()</code>{" "}
          or constructor functions.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Creating Objects with Prototypal Inheritance
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Object.create()</span>: Safely
            creates a new object with a given prototype.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`const carPrototype = {
  drive() { console.log("Driving..."); }
};
const myCar = Object.create(carPrototype);
myCar.drive(); // "Driving..."`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">
              Constructor Functions and <code>prototype</code> Property:
            </span>
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log("Hello, " + this.name);
};
const alice = new Person("Alice");
alice.sayHello(); // "Hello, Alice"`}</code>
            </pre>
          </li>
          <li>
            <span className="font-semibold">ES6 Classes:</span> Classes in
            JavaScript are syntactic sugar over prototypal inheritance.
            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
              <code>{`class Animal {
  speak() { console.log("Animal speaks"); }
}
class Dog extends Animal {
  bark() { console.log("Woof!"); }
}
const d = new Dog();
d.speak(); // "Animal speaks"
d.bark();  // "Woof!"`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Prototype Chain in Built-in Objects
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <code>Array</code> objects inherit from <code>Array.prototype</code>
            , which inherits from <code>Object.prototype</code>.
          </li>
          <li>
            <code>Date</code> objects inherit from <code>Date.prototype</code>,
            and so on.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Adding Properties and Methods via Prototypes
        </h3>
        <p>
          You can add properties or methods to all instances of a constructor by
          modifying its <code>prototype</code> property.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-sm mb-0">
          <code>{`function Student(name) {
  this.name = name;
}
Student.prototype.school = "ABC High School";
const s1 = new Student("Sam");
console.log(s1.school); // "ABC High School"`}</code>
        </pre>
        <p>
          <span className="font-semibold">Best Practice:</span> Only modify your
          own prototypes, never built-in prototypes like{" "}
          <code>Object.prototype</code>
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`function Animal() {}
Animal.prototype.eats = true;

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.jumps = true;

const r = new Rabbit();

console.log(r.eats);
console.log(r.jumps);
console.log(r.hasOwnProperty("eats"));
console.log(r.hasOwnProperty("jumps"));`}</code>
        </pre>
      </section>
    </div>
  );
}
