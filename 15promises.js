// Promise - это объект, который представляет собой результат асинхронной операции.
const myPromise = new Promise((resolve, reject) => {
    // code block
    // Должна быть вызвана функция resolve или reject
})

myPromise
    .then(value => {
        /*
        * Действия в случае успешного выполнения Промима
        * Значение value - это значение, переданное в вызове функции resolve 
        * внутри Промиса
        */
    })
    .catch(error => {
        /*
        * Действие в случае отклонения Промима
        * Значение error - это значение, переданное в вызове функции reject
        * внутри Промиса 
        */
    })

// fetch в Промисах
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.log(error))

// Практика
const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
