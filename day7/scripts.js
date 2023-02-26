// a. Get all the countries from the Asia continent/region using the Filter function

// // Create a new xmlhttprequest object

// let xhr = new XMLHttpRequest()

// // configure request
// xhr.open('GET', 'https://restcountries.com/v3.1/all')

// // send over the request
// xhr.send()

// xhr.onload = function () {
//     var Data = JSON.parse(this.response)
//     const asia = Data.filter((value) => {
//         if (value.region === "Asia") {
//             return value.name
//         }
//     })
//     console.log(asia)
// }


// b. Get all the countries with a population of less than 2 lakhs using filter function

// // Create a new xmlhttprequest object

// let xhr = new XMLHttpRequest()

// // configure request
// xhr.open('GET', 'https://restcountries.com/v3.1/all')

// // send over the request
// xhr.send()

// xhr.onload = function () {
//     var Data = JSON.parse(this.response)
//     const countr_2_lakh = Data.filter((value) => {
//         if (value.population < 200000) {
//             return value.population
//         }
//     })
//     console.log(countr_2_lakh)
// }

// c. Print the following details name, capital, flag using forEach function

// Create a new xmlhttprequest object

// let xhr = new XMLHttpRequest()

// // configure request
// xhr.open('GET', 'https://restcountries.com/v3.1/all')

// // send over the request
// xhr.send()

// xhr.onload = function () {
//     var country_data = JSON.parse(this.response)
//     country_data.forEach(element => {
//         console.log(element.name['common'])
//         console.log(element.capital)
//         console.log(element.flag)
//     });
// }

// d. Print the total poulation of countries using reduce function

// let xhr = new XMLHttpRequest()

// // configure request
// xhr.open('GET', 'https://restcountries.com/v3.1/all')

// // send over the request
// xhr.send()

// xhr.onload = function () {
//     var country_data = JSON.parse(this.response)
//     const pop = country_data.reduce((acc, element) => {
//         return acc + element.population
//     }, 0);
//     console.log(pop)
// }

// e. Print the country which uses US Dollars as currency

// let xhr = new XMLHttpRequest()

// // configure request
// xhr.open('GET', 'https://restcountries.com/v3.1/all')

// // send over the request
// xhr.send()

// xhr.onload = function () {
//     var Data = JSON.parse(this.response)
//     for (var i of Data) {
//         if (i.currencies[0].symbol == "$") {
//             console.log(i.name['common'])
//         }
//     }
// }




