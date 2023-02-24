// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code: create a function called morChar that takes in two parameters: (string1) for the first string, and (string2) for the second string. Write a conditional if statement that returns which string is longer and if they returns ("Both strings are the same length") if they are the same length.

// const moreChar = (string1, string2) => {
// if (string1.length > string2.length){
//     return string1
// }
// else if (string2.length > string1.length){
//     return string2
// }
// else if (string1.length == string2.length){
// return "Both strings are the same length"
// }
// }

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// console.log(moreChar(fruit1, fruit2)) // --> "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// console.log(moreChar(fruit3, fruit4)) // --> "cherry"
// // Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: Create a function called boiling that takes in a number as its parameter. Inside the function, create a conditional statement that determines if the number is above, below, or at boiling point. Use string interpolation to log correctly.

// const boiling = (num) => {
//     if (num === 212){
//         return `${num} is at boiling point`
//     }
//     else if (num > 212) {
//         return `${num} is above boiling point`
//     }
//     else if (num < 212) {
//         return `${num} is below boiling point`
//     }
// }

// const temp1 = 42
// console.log(boiling(temp1)) // --> 42 is below boiling point
// // Expected output: "42 is below boiling point"

// const temp2 = 350
// console.log(boiling(temp2)) // --> 350 is above boiling point
// // Expected output: "350 is above boiling point"

// const temp3 = 212
// console.log(boiling(temp3)) // --> 212 is at boiling point
// // Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: Combine both arrays using the .concat() method and use the .length method wrapped around both arrays to find the total length. You can make a new variable for the combined arrays and use the .length method on that as well for the same result.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// console.log((padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)).length) // --> 9
// const combinedPadres = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(combinedPadres.length)
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: use split("") method on currentCohort to create an array with each individual character separated by ''. Use reverse method to flip the order and lastly use the join("") method to turn the array into a string joined by """.

// const currentCohort = "Alpha 2023"
// currentCohort.split("")
// console.log(currentCohort.split("").reverse().join("")) // --> 3202 ahplA
// Expected output: "3202 ahplA"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: use .indexOf method on the myNumbers variables. The parameters of .indexOf will be the variables provided and the array index where the search will begin.

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// console.log(myNumbers.indexOf(givenValue1, 3)) // --> 7
// // Expected output: 7

// const givenValue2 = 10
// console.log(myNumbers.indexOf(givenValue2, 6)) // --> 8
// // Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: use the .sort() method on the array sort the numbers from smallest to largest then use the .reverse() method to flip to largest to smallest.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
console.log(sanDiegoSummerTemperatures.sort().reverse()) // --> [82, 80, 79, 77, 76, 73, 72]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
console.log(sanDiegoWinterTemperatures.sort().reverse()) // --> [68, 67, 66, 66, 62, 59, 59]

// Expected output: [68, 67, 66, 66, 62, 59, 59]
