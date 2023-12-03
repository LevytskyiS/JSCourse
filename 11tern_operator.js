// Тернарный оператор
// Конструкция с тернарным оператором - выражение, возвращающее значение
// одного из двух возможных результатов в зависимости от условия.

// Синтаксис
// Условие ? Выражение 1 : Выражение 2
const value = 0
// Можно писать конструкции двумя способами
value
    ? console.log("True")
    : console.log("False")

value ? console.log("In-line") : console.log("Function")

// -------------------
const value1 = 11
const value2 = 25

function myFn1(a, b) {
    return a + b
}

function myFn2() {
    console.log("Kek")
}

value1 && value2
? myFn1(value1, value2)
: myFn2()

// -------------------
let value3 = 11
console.log(value3 >= 0 ? value3 : -value3)

// -------------------
let value4 = -5
const res = value4 >= 0 ? value4 : -value4
console.log(res)