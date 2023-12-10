// Классы
class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) {
        return `${first}+${second}`
    }
}

// this - указывает на экземпляр класс (==self), но, в отличии Python,
// нет необходимости передавать this первым аргументом

// constructor == __init__()

const firstComment = new Comment("Hello!")
// console.log(firstComment.votesQty)
// console.log(firstComment.upvote())
// console.log(firstComment.votesQty)

// Цепочка прототипов
// Все классы наследуются от класса Object

// Проверка принадлежности
console.log(firstComment instanceof Comment)
console.log(firstComment instanceof Array)

// Проверка принадлежности свойста экземпляра объекту
console.log(firstComment.hasOwnProperty("text"))
console.log(firstComment.hasOwnProperty("kek"))

// Статические матоды (как @staticmethod в Python)
// Используется ключевое слово static
console.log(Comment.mergeComments("First", "Second"))

// Расширение других классов
// При создании класса с использованием расширения другого класса (наследование),
// конструктор вызывается автоматически
class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray(2, 5, 4, 3)
console.log(myArray)
console.log(myArray.sum())

// Цепочка прототипов
// myArray (instance)
// NumberArray (class)
// Array (class being inherited)
// Object (basic class of all classes being always inherited)

// Прототип
console.log(firstComment.__proto__) // Надо использовать в браузере

// Строки и числа ведут себя как объекты (у них есть свои методы)
const num = 30
const myStr = "Loki"

// ---------------------------------------
// Some practice
// const newArr = []

// let count = 0

// for (let i = 0; i < 10; i++) {
//     const com = new Comment("Kek")
//     newArr.push(com)
// }

// while (count <= 5) {
//     const com = new Comment("Kek")
//     newArr.push(com)
//     count++
// }

// console.log(newArr)