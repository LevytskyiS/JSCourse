// async/await - специальный синтаксис для упрощения работы с промисами
async function asyncFnOne() {
    // всегда возвращает промис
}

const asyncFnTwo = async () => {
    // всегда возвращает промис
    return "Success!"
}

asyncFnTwo().then(value => console.log(value))

const asyncFnThree = async () => {
    // всегда возвращает промис
    throw new Error("Error!")
}

asyncFnThree().catch(error => console.log(error.message))

// await - с его помощью можно ожидать результата другого промиса
const asyncFnFour = async () => {
    // await <Promise>
}

// Example
const timerPromise = () => 
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000))

const asyncFnFive = async () => {
    console.log("Timer starts")
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log("Timer ended", endTime - startTime)
}

asyncFnFive()

// Переход с Промисов на async/await + обработка ошибок
// const getData = (url) =>
//     new Promise((resolve, reject) =>
//         fetch(url)
//             .then(response => response.json())
//             .then(json => resolve(json))
//             .catch(error => reject(error))
//     )

const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
    // В данном случае ошибка будет автоматически обработана catch функцией
}
   
// getData('https://jsonplaceholder.typicode.com/todos/3')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

const url = 'https://jsonplaceholder.typicode.com/todos/3'
try {
    const data = await getData(url) 
    console.log(data)
} catch (error) {
    console.log(error.message)
}
// Чтобы избежать SyntaxError: await is only valid in async functions and the top 
// level bodies of modules, необходимо, чтобы файл имел расширение .mjs.
// Иначе в строке const data = await getData(url) падает вышеуказанная ошибка  

console.log(data)