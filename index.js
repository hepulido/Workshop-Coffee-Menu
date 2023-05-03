const coffeeMenu = require("./coffee_data.js")

//Print an array of all the drinks on the menu.

const printDrinks = coffeeMenu.map(drink => drink.name)
console.log(printDrinks);
//Print an array of drinks that cost 5 and under.
const underFive = coffeeMenu.filter(prices => prices.price <= 5).map(drink => drink.name)
console.log(underFive)
//Print an array of drinks that are priced at an even number.
const evenPrice = coffeeMenu.filter( even => even.price % 2 === 0 ).map(drink => drink.name)
console.log(evenPrice)
//Print the total if you were to order one of every drink.
const initialValue = 0
const total = coffeeMenu.reduce((acc , currn) => acc + currn.price, initialValue)
console.log(total)
//Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal).map(drink => drink.name)
console.log(seasonalDrinks)
//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
console.log(seasonalDrinks.map( drink => drink + "with imported beans")) 

