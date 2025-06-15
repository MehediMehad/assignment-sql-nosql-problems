// Task 1: Array Filtering and Mapping
interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}

const people: Person[] = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 40, gender: "female" },
];

function filterAndMap(people: Person[]): string[] {
  return people
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
}

const result: string[] = filterAndMap(people);
console.log(result); // Output: ['Bob', 'Charlie']

// Task 2: Object Manipulation
interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
];

function getBookTitles(books: Book[]): string[] {
  return books.map((book) => book.title);
}

const titles: string[] = getBookTitles(books);
console.log(titles);
// Output: ['The Hobbit', '1984', 'Brave New World']

// Task 3: Function Composition
function square(num: number): number {
  return num * num;
}

function double(num: number): number {
  return num * 2;
}

function addFive(num: number): number {
  return num + 5;
}

function composeFunctions(num: number): number {
  return addFive(double(square(num)));
}

console.log("Task 3 Output:", composeFunctions(3)); // 23

// Task 4: Sorting Objects
interface Car {
  make: string;
  model: string;
  year: number;
}

const cars: Car[] = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2022 },
];

function sortCarsByYear(cars: Car[]): Car[] {
  return [...cars].sort((a: Car, b: Car) => a.year - b.year);
}

console.log("Task 4 Output:", sortCarsByYear(cars));

// Task 5: Find and Modify
const people2: Person[] = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Carol", age: 22, gender: "female" },
];

function updateAgeByName(
  people: Person[],
  name: string,
  newAge: number
): Person[] {
  const updatedPeople: Person[] = [...people];
  const person: Person | undefined = updatedPeople.find(
    (p: Person) => p.name === name
  );
  if (person) {
    person.age = newAge;
  }
  return updatedPeople;
}

console.log("Task 5 Output:", updateAgeByName(people2, "Bob", 31));

// Task 6: Array Reduction
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

function sumEvenNumbers(numbers: number[]): number {
  return numbers.reduce(
    (sum: number, num: number) => (num % 2 === 0 ? sum + num : sum),
    0
  );
}

console.log("Task 6 Output:", sumEvenNumbers(numbers)); // 20

// Task 7: Leap Year Checker
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Test cases
console.log(isLeapYear(2000)); // true

// Task 8: Unique Values
const numbers2: number[] = [1, 2, 2, 3, 4, 4, 5];

function getUniqueNumbers(numbers: number[]): number[] {
  return [...new Set(numbers)];
}

console.log("Task 8 Output:", getUniqueNumbers(numbers2)); // [1, 2, 3, 4, 5]
