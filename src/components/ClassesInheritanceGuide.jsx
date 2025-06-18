export default function ClassesInheritanceGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        3.7 Classes and Inheritance in JavaScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What are Classes?</h3>
        <p>
          <span className="font-semibold">Classes</span> in JavaScript are
          syntactic sugar over the existing prototype-based inheritance. They
          provide a clearer and more concise syntax to create objects and deal
          with inheritance. Classes group data (properties) and behavior
          (methods) into reusable blueprints for objects.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Creating a Class</h3>
        <p>
          Use the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
            class
          </code>{" "}
          keyword to define a class. The <code>constructor</code> method
          initializes new objects created from the class.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed = speed;
    console.log(\`\${this.name} runs with speed \${this.speed}.\`);
  }

  stop() {
    this.speed = 0;
    console.log(\`\${this.name} stands still.\`);
  }
}

const animal = new Animal("My animal");
animal.run(5); // My animal runs with speed 5.
animal.stop(); // My animal stands still.
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Class methods are defined inside the class body and are shared by
            all instances.
          </li>
          <li>
            The <code>constructor</code> is called automatically when creating
            an instance with <code>new</code>.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Inheritance with <code>extends</code>
        </h3>
        <p>
          Use the{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
            extends
          </code>{" "}
          keyword to create a subclass that inherits from a parent class. The
          child class gets all the properties and methods of the parent, and can
          add its own or override inherited ones.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`class Rabbit extends Animal {
  hide() {
    console.log(\`\${this.name} hides!\`);
  }
}

const rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Child classes inherit all methods and properties from the parent
            class.
          </li>
          <li>
            You can add new methods or override existing ones in the child
            class.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Using <code>super</code>
        </h3>
        <p>
          The{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
            super
          </code>{" "}
          keyword is used to call the parent class's constructor or methods. In
          a subclass constructor, you must call <code>super()</code> before
          using <code>this</code>. You can also use <code>super.method()</code>{" "}
          to call a parent method from an overridden method.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name); // Call parent constructor
    this.earLength = earLength;
  }

  hide() {
    console.log(\`\${this.name} hides!\`);
  }

  stop() {
    super.stop(); // Call parent stop method
    this.hide();
  }
}

const rabbit = new Rabbit("White Rabbit", 10);
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            <code>super()</code> in the constructor calls the parent’s
            constructor.
          </li>
          <li>
            <code>super.method()</code> calls a method from the parent class.
          </li>
          <li>
            When overriding a method, you can use <code>super</code> to access
            the parent’s implementation.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Important Notes</h3>
        <ul className="list-disc list-inside">
          <li>
            In a subclass constructor, <code>super()</code> must be called
            before using <code>this</code> or accessing instance fields.
          </li>
          <li>
            Child classes can override parent methods and still call the parent
            version with <code>super.method()</code>.
          </li>
          <li>
            Classes use prototype-based inheritance under the hood, but the
            syntax is more familiar to those from other OOP languages.
          </li>
          <li>
            Arrow functions do not have their own <code>this</code> or{" "}
            <code>super</code>, so they inherit from the surrounding
            context.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the output of the following code snippet and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(\`\${this.name} makes a noise.\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    super.speak();
    console.log(\`\${this.name} barks.\`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak();`}</code>
        </pre>
      </section>
    </div>
  );
}
