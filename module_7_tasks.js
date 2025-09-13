// Задание 7.1
function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
    name: "Alice",
    age: 25
};

printInfo.call(person); // Вывод: Name: Alice, Age: 25

// Задание 7.2
function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Invalid operator";
    }
}

const result = calculate.apply(null, [2, 3, "+"]);
console.log(result); // Вывод: 5

// Задание 7.3
const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 },
    { name: "Dave", age: 15 },
];

const adults = users.filter(user => user.age >= 18);
const names = adults.map(user => user.name);

console.log(adults); // [{ name: "Bob", age: 20 }, { name: "Charlie", age: 30 }]
console.log(names);  // ["Bob", "Charlie"]

// Задание 7.4
function setFullName(fullName) {
    this.fullName = fullName;
}

const setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith");

console.log(person.fullName); // John Smith

// Задание 7.5
function getUniqueSortedArray(arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
}

const numbers = [4, 2, 5, 2, 3, 4, 1, 1, 6];
const uniqueSorted = getUniqueSortedArray(numbers);

console.log(uniqueSorted); // [1, 2, 3, 4, 5, 6]
