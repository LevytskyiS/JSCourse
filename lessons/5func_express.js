// Function expressions (Функциональные выражения)
// Объявленная функция
function myFn(a, b) {
    let c 
    c = a + b + 1
    return c
}

// Функциональное выражение
const someNum = function (a, b) {
    let c 
    c = a + b + 1
    console.log(c)
    return c
}
// someNum(2, 3)
// Функциональное выражение всегда анонимное
// Нельзя использовать автономно, нужно присвоить её как значение переменной
// или передать как аргумент другой функции

// Стрелочные функци (это выражение и они всегда анонимны)
const anotherNum = (a, b) => {
    let c 
    c = a + b + 1
    return c
}
// anotherNum(4, 5)

// Значения параметров по умолчанию
function myltByFactor(value, multiplier = 1) {
    return value * multiplier
}

// myltByFactor(2) // 2
// myltByFactor(2, 4) // 8

// Неявный возврат объекта
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})
// Ниже указан явный возврат объекта
// const newPost = (post, addedAt = Date()) => {
//     return {...post,
//     addedAt}
// }
// Круглые скобки вокруг квадратных говорят о том, что мы
// возвращаем объект
firstPost = {
    id: 1,
    author: "Mike"
}

// newPost(firstPost)