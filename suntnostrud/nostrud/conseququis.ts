interface Person {
  name: string;
  age: number;
  greet(): void;
}

class Employee implements Person {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.position}.`);
  }
}

// Usage
const employee = new Employee('Alice', 30, 'Developer');
employee.greet();
