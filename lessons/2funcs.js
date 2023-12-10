// Part 1
let a = 6
let b = 3

function sum(a, b) {
    const c = a + b
    console.log(c)
    return c
}

// console.log(sum(a, b))
sum(a, b)

// Функция может быть: 
// Именованной
// Присвоена переменной
// Анонимной
// Аргументом при вызове другой функции
// Значением свойства (метода) объекта

//  Part 2
// Функция - это объект и у неё есть свойства
function myFn(a, b) {
    let c
    a = a + 1
    c = a + b 
    return c
}
console.log("MyFN:", myFn(11, 9))
// console.dir(myFn)
// Структура функции: 
// 1. Ключевое слово function
// 2. Название функции (не обязательно)
// 3. Опциональный параметр (переменная в скобках после названия функции)
// 4. Тело функции
// 5. Возврат результата (если его нет, то возвращает undefined)

function myFN2() {} // Это просто пустая функция, возвращает undefined

// Part 3 - Передача значения по ссылке
const personOne = {
    name: "Bob",
    age: 12
}

// Не рекомендуется метировать внешние объекты внутри функции (как сделано ниже)
function increasePersonAge(person) {
    person.age *= 2
    return person
}

// increasePersonAge(personOne)
// console.log(personOne.age) // 24

// Лучше создавать полную копию объекта
function increasePersonAgeFN(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 2
    return updatedPerson
}

const updatedPersonOne = increasePersonAgeFN(personOne)
console.log(updatedPersonOne.age)

// Part 4 - Callback functions
// Это когда одна функция вызывает внутри себя другую
function someFunc() {
    // Do something
}

function fnWithCallback(callbackFunction) {
    callbackFunction()
}

// fnWithCallback(someFunc)

// Ещё один пример
function printMyName() {
    console.log("Kek Name")
}

// setTimeout(printMyName, 1000)