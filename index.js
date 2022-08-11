//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here

const favRecipe = {
  title: "cake",
  servings: 4,
  ingredients: [
    "flour",
    "eggs",
    "milk",
    "oil",
    "sugar",
    "vanilla essence",
    "cream",
    "baking powder",
    "almomds",
  ],
};

// console.log(Object.values(favRecipe));

console.log(favRecipe.title);
console.log("Serves", favRecipe.servings);
console.log("Ingredients", favRecipe.ingredients);

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here

let books = [
  { title: "blue sky", author: "hun gia", alreadyRead: true },
  { title: "space", author: "gia khan", alreadyRead: false },
  { title: "amalfi coast", author: "mahim", alreadyRead: true },
];

for (let item of books) {
  console.log(`${item.title} by ${item.author}`);
}

for (let item of books) {
  if (item.alreadyRead === true) {
    console.log(`you have already read ${item.title} by ${item.author}`);
  } else {
    console.log(`you must read ${item.title} by ${item.author}`);
  }
}
