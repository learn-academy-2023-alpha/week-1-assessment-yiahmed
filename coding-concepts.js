// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5, because push adds the new value to the array but it will input the index of the pushed value.
// b) Verify and explain: Yes it is 5, because push adds the new value to the array but it will input the index of the pushed value.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10, because there are 10 total characters in the string
// b) Verify and explain: Yes it is 10, because there are 10 total characters in the string

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o will be logged because it is the 4th character in the string
// b) Verify and explain: o was logged because it is the 4th character in the string

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby will be logged, arrays are 0 index so Ruby would be at the 1 index
// b) Verify and explain: Yes Ruby was logged because arrays are 0 index so Ruby is at the 1 index

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: The weekendDays array will be logged but will the values being uppercase
// b) Verify and explain: Error was given because the .toUpperCase() cannot be used on arrays

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number will be logged because the length of dataTypes is 4 which is an integer
// b) Verify and explain: number was logged because the length of dataTypes is 4 which is an integer
