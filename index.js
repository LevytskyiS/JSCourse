// 1 вариант объявления функции
// function a() {
//     console.log("Kek")
// }
// a()

// 2 вариант объявления функции и присвоение её переменной
// const a = () => {
//     console.log('kek')
// }
// a()

// Объекты
const myCity = {
    city: "New York",
    country: "USA"
}
// console.log(myCity.city, "is in", myCity.country) // Dot notation
myCity.city = "Las Vegas" // Value change
// console.log(myCity.city, "is in", myCity.country) // Dot notation

// Добалвение свойства
// 1
myCity.other_city = "Los Angeles" // Value change
// 2
myCity["population"] = 5000
// 3
const major = "major"
myCity[major] = "Rick"

// console.log(myCity)
delete myCity.country // Удаление свойства объекта

myCity.info = {
    isPopular: true,
    migrants: true
} // Value change

// console.log(myCity)
delete myCity.info.isPopular // Удаление свойства объекта
// console.log(myCity)

const name = "Nick"
const postsQty = 23

const userProfile = {
    // name: name, 
    // postsQty: postsQty,
    // hasSignedAgreement: false
    // Ниже указан сокращенный вариант записи свойст, 
    // его можно использовать когда название свойства объекта является 
    // таким же как и переменная, чье значение оно получает (как в примере выше)
    name, 
    postsQty, 
    hasSignedAgreement: false
}

// console.log(userProfile)

// Глобальные объекты
// Window (в браузере), global (в ноде), globalThis (унифицированный)

// Свойства глобальных объектов
// console.log("Kek") == window.console.log("Kek") == global.console.log("Kek")

// Методы
// Метод - свойство объекта, значение которого - функция
const mynewCity = {
    city: "New York",
    // cityGreeting: function () {
    //     console.log("Greetings!")
    // }
    // Ещё один вариант создания метода
    cityGreeting(){
        console.log("Greetings!")
    }
}

// mynewCity.cityGreeting()

// JSON - Javascript object notation
// JSON передается в виде строки
// JSON.parse() - перевод JSON в JS-объект
// JSON.stringify() - перевод JS-объекта в JSON

const post = {
    title: "My post",
    likesQty: 5,
}

// console.log(JSON.stringify(post))

// Мутация в JS
const post2 = post
// В данном случае меняя свойства post2, будут меняться свойства и post
// Дабы этого избежать, можно поступить следующим образом
// Это как deepcopy() в Python
const post3 = Object.assign({}, post)
// Однако это не поможет, если там свойством объекта будет объект
// Такие свойства все равно будут меняться у оригинального объекта
// Ещё один вариант 
const post4 = {...post}
// В следующем варианте можно полностью избежать мутации свойств оригинального объекта
// В данном случае ссылки на ориг. объект не сохраняются
const post5 = JSON.parse(JSON.stringify(post))
