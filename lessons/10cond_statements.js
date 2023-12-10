// Условные инструкции:
// if 
let condition = 1
if (condition) {
    // code block to be executed if the condition is true
}

let val = 10

if (val > 5) {
    val += 10
}

// if ... else
if (condition) {
    // code block to be executed if the condition is true
} else {
    // code block to be executed if the condition is false
}

if (val < 5) {
    val += 10
} else {
    val -= 100
}

// if ... else if ... else
let condition2

if (condition) {
    // code block to be executed if the first condition is true
} else if (condition2) {
    // code block to be executed if the second condition is true
} else {
    // code block to be executed if none of the conditions are true
}

// switch
switch (condition) {
    case A:
        // code block for when condition equals A
        break
    case B:
        // code block for when condition equals B
    default:
        // code block for all other cases
}

const month = 12

switch (month) {
    case 12:
        console.log("December")
        break
    case 6:
        console.log("June")
        break
    case 3:
        console.log("March")
        break
    default:
        console.log("Another month of the year")
}
// Ternary operator (expression)
// 7:09:00