export default function TypeScriptIntroGuide() {
  return (
    <div className="prose max-w-none dark:prose-invert p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        7.3 Introduction to TypeScript
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is TypeScript?</h3>
        <p>
          <span className="font-semibold">TypeScript</span> is a superset of
          JavaScript that adds static typing, interfaces, and other features to
          help you catch errors early and write more robust, maintainable code.
          TypeScript code compiles down to regular JavaScript and can run
          anywhere JavaScript runs.
        </p>
        <ul className="list-disc list-inside">
          <li>All valid JavaScript is valid TypeScript.</li>
          <li>
            TypeScript lets you annotate variables, function parameters, and
            objects with types, reducing bugs and improving code clarity.
          </li>
          <li>
            TypeScript is widely used in modern web development and supported by
            editors like VS Code (with autocomplete and error checking).
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Basic Type Annotations</h3>
        <p>
          You can specify the type of a variable, function parameter, or return
          value. TypeScript will check that you use them correctly.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;

// Type inference (TypeScript infers the type)
let greeting = "Hello"; // inferred as string

function add(a: number, b: number): number {
  return a + b;
}
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            If you try to assign a value of the wrong type, TypeScript will show
            an error.
          </li>
          <li>
            TypeScript infers types when possible, so you don’t always need to
            annotate explicitly.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Arrays, Tuples, and Unions
        </h3>
        <p>
          TypeScript lets you specify the types of array elements, tuples
          (fixed-length arrays with specific types), and union types (a value
          can be one of several types).
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Arrays
let numbers: number[] = [1, 2, 3];

// Tuples
let person: [string, number] = ["Bob", 25];

// Union types
let value: string | number = "hello";
value = 42; // OK
// value = true; // Error: not string or number
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Tuples enforce both the type and the order of elements.</li>
          <li>Unions allow more flexible parameter or variable types.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Objects, Types, and Interfaces
        </h3>
        <p>
          You can define the structure of objects using <code>type</code> or{" "}
          <code>interface</code>. This makes your code self-documenting and
          prevents missing or extra properties.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`// Using type
type User = {
  name: string;
  age: number;
  premium?: boolean; // optional property
};

let user: User = { name: "Sam", age: 22 };

// Using interface (preferred for objects/classes)
interface Product {
  id: number;
  name: string;
  price: number;
}

const item: Product = { id: 1, name: "Book", price: 9.99 };
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>Interfaces are preferred for objects and classes.</li>
          <li>
            Optional properties use <code>?</code> after the property name.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Classes and Interfaces</h3>
        <p>
          TypeScript supports classes and object-oriented programming, with
          interfaces to define contracts for classes.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`interface User {
  name: string;
  id: number;
}

class UserAccount implements User {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            Classes can implement interfaces to ensure they have the required
            properties and methods.
          </li>
          <li>
            TypeScript checks that the class matches the interface’s shape.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Type Inference and Structural Typing
        </h3>
        <p>
          TypeScript uses <span className="font-semibold">type inference</span>{" "}
          to guess types when they are not explicitly provided. It also uses{" "}
          <span className="font-semibold">structural typing</span> (duck
          typing): if two objects have the same shape, they are considered the
          same type.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`interface Point { x: number; y: number; }
function logPoint(p: Point) {
  console.log(\`\${p.x}, \${p.y}\`);
}

const point = { x: 10, y: 20 };
logPoint(point); // OK, same shape as Point

const other = { x: 5, y: 7, z: 9 };
logPoint(other); // OK, extra properties are ignored
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>
            TypeScript focuses on the shape of objects, not their explicit type
            declarations.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Practice Task</h3>
        <p>Predict the TypeScript errors (if any) and explain why:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto text-sm">
          <code>{`type Car = {
  make: string;
  year: number;
};

function printCar(car: Car) {
  console.log(\`\${car.make} (\${car.year})\`);
}

const myCar = { make: "Toyota", year: "2020" };
printCar(myCar);
`}</code>
        </pre>
        <ul className="list-disc list-inside">
          <li>What error will TypeScript show?</li>
          <li>How would you fix it?</li>
        </ul>
      </section>
    </div>
  );
}
