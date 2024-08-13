// File: objectPractice.js

console.log("Object Practice Exercise");

// Example 1: Creating a Basic Object
const book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  pages: 281
};

console.log("Example 1: Basic Object");
console.log(book.title);  // Output: To Kill a Mockingbird
console.log(book.author); // Output: Harper Lee
console.log(book.pages);  // Output: 281

// TODO 1: Create a `movie` object
// Create an object named `movie` with the following properties:
// `title` (string), `director` (string), `year` (number)
// Log each property using dot notation.

console.log("\nMovie Object:")
const movie = {
    title: 'Wedding Signer', 
    director: 'Frank Coraci',
    year: 1998
};

console.log(`Movie: ${movie.title} Directed by: ${movie.director} in year ${movie.year}.`);

// Example 2: Creating a Pet Object
const pet = {
  name: 'Whiskers',
  species: 'Cat',
  age: 5
};

console.log("\nExample 2: Pet Object");
console.log(pet.name);    // Output: Whiskers
console.log(pet.species); // Output: Cat
console.log(pet.age);     // Output: 5

// TODO 2: Create a `city` object
// Create an object named `city` with the following properties:
// `name` (string), `population` (number), `country` (string)
// Log each property using dot notation.
const city = {
    name: "Baton Rouge",
    population: 250000,
    country: "USA"
};
console.log("\nCity Object:");
console.log(`The city is named: ${city.name}. The population is: ${city.population}. In ${city.country}.`);

// Example 3: Creating a Car Object
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2021
};

console.log("\nExample 3: Car Object");
console.log(car.brand);  // Output: Toyota
console.log(car.model);  // Output: Corolla
console.log(car.year);   // Output: 2021

// TODO 3: Create a `computer` object
// Create an object named `computer` with the following properties:
// `brand` (string), `processor` (string), `ram` (number)
// Log each property using dot notation.
const computer = {
    brand: "Dell",
    processor: "Intel-7",
    ram: 16
};
console.log("\nComputer Object:");
console.log(`Thank you for ordering the ${computer.brand} computer with a ${computer.processor} processor and ${computer.ram}g of RAM`);


// Example 4: Creating a Product Object
const product = {
  name: 'Laptop',
  price: 999.99,
  inStock: true
};

console.log("\nExample 4: Product Object");
console.log(product.name);    // Output: Laptop
console.log(product.price);   // Output: 999.99
console.log(product.inStock); // Output: true

// TODO 4: Create a `restaurant` object
// Create an object named `restaurant` with the following properties:
// `name` (string), `type` (string), `rating` (number)
// Log each property using dot notation.
const restaurant = {
  name: "Jenn's Hotcakes",
  type: "Breakfast Food",
  rating: 4.5
};
console.log("\nRestaurant Object:");
console.log(restaurant.name);
console.log(restaurant.type);
console.log(restaurant.rating);

// Example 5: Creating a Student Object
const student = {
  firstName: 'John',
  lastName: 'Doe',
  grade: 'A'
};

console.log("\nExample 5: Student Object");
console.log(student.firstName); // Output: John
console.log(student.lastName);  // Output: Doe
console.log(student.grade);     // Output: A

// TODO 5: Create a `house` object
// Create an object named `house` with the following properties:
// `address` (string), `size` (number), `hasGarage` (boolean)
// Log each property using dot notation.
const house = {
  address: "485 McDonald Ave.",
  size: 4,
  hasGarbage: true

};

console.log("\nHouse Object:");
console.log(house. address);
console.log(house.size);
console.log(house.hasGarbage);
console.log(`\nThis house is on ${house.address}. It is a ${house.size} bedroom and it's ${house.hasGarbage}, it does have garbage pick up.`);
