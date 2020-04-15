// Exercise 1
// Practice: Represent your Pet
// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

// const princeCharmingTheCat = {
//     species: "Cat",
//     nicknames: "Prince Jarby",
//     age: 8,
//     meow: function () {
//         // window.alert("MEOW")
//     },
//     whines: function (){
// // window.alert("feedme")
//     },
//     hisses: function () {
// // window.alert("leave me the f alone")
//     },
//     favoriteToys: [],
//     play: function (toy) {
// if (toy === "fuzzy") {
// this.favoriteToys.push(toy);
// } else {
// }
//     }
// }
// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior. For example:

// princeCharmingTheCat.meow()
// princeCharmingTheCat.whines()
// princeCharmingTheCat.hisses()
// princeCharmingTheCat.play("fuzzy")
// console.log(princeCharmingTheCat.favoriteToys)
// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.

// Exercise 2
// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
const restaurant = {
  name: "Bob's Burgers",
  orders: [],
  placeOrder: function (order) {
    this.orders.push(order);
  },
};

const chickenComboMeal = {
  sandwichType: "chicken",
  fries: true,
  drinkSize: "large",
};

const burgerComboMeal = {
  sandwichType: "cheeseburger",
  fries: false,
  drinkSize: "small",
};

restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(burgerComboMeal);
console.table(restaurant.orders);

// Place an order

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()

// Exercise 3
// You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

const elizabethSanger = {
  district: "Ohio District 6th",
  donate: "https://paypal.me/sbrooks12?locale.x=en_US",
  biography: "born an underdog. will always be an underdog. the hero we don't deserve.",
missionStatement: "I am not an idiot. The end.",
registerToVote: "rockthevote.org",
  calendar: [],
  dates: function (date) {
    this.dates.push(date);
  },
  platforms: [],
  placePlatforms: function (platform) {
    this.placePlatforms.push(platform);
    // Taxes
    // Jobs
    // Infrastructure
    // Health care
    // Crime and enforcement
  },
    information: [],
    gather: function (info) {
      this.gather.push(info);
    },
  // name: ,
  // address: ,
  // email: ,
  // phoneNumber: ,
  // availability: ,
  // assignment:
photos: [],
stockPhotos: function (pics) {
  this.stockPhotos.push(pics);
  // headShot: ,
// pictureOfFamily: ,
// pictureOfConstitutents: ,
},
}

const benVolunteer = {
    name: "Ben Affleck",
    address: "traitorland",
    email: "jendeservedbetter@gmail.com",
    phoneNumber: "867-5389",
    availability: "in between drinking", "cheating", "smoking",
    assignment: "no job for you"
}

elizabethSanger.

