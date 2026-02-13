import React from "react";
import "./App.css";

// Base Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student Class (Inheritance)
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  // Method Overriding
  getDetails() {
    return `Student - Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Teacher Class (Inheritance)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Method Overriding
  getDetails() {
    return `Teacher - Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
  }
}

function App() {
  // Polymorphism Example
  const people = [
    new Student("Rahul", 20, "A"),
    new Teacher("Mehta", 40, "Mathematics"),
    new Person("Amit", 30),
  ];

  return (
    <div className="container">
      <h1>Class Hierarchy Example</h1>

      {people.map((person, index) => (
        <div key={index} className="card">
          <p>{person.getDetails()}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
