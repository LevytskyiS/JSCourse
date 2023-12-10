// Циклы

// for {Начальная инструкция; Условие; Итерационное действие} {
    //      Блок кода выполняемый на каждом интервале
    // }
    
for (let i = 0; i < 5; i++) {
    // console.log(i)
}

// ------------------------------
const myArray = ["first", "second", "third"]

for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i])
}

// -------------------------------
myArray.forEach((el, index) => {
    // console.log(`${index}: ${el}`);
})
myArray.forEach(el => {
    // console.log(`${el}`);
})

// while 
let count = 0

while (count < 5) {
    console.log(count)
    count++
}

// do while
// В таком случае сначала выполняется код в блоке do и лишь потом
// проверяется условие у while перед стартом следующего цикла
let i = 0

do {
    console.log(i)
    i++
} while (i < 5)

// forEach для объектов
const obj = {
    name: 'John', 
    age: 30, 
    city: 'New York'
}

Object.keys(obj).forEach(key => {
    console.log(key, obj[key])
})

// for in для массивов
for (const key in myArray) {
// В данном случае итерация идёт по индексам. Key - это индекс.
    console.log(myArray[key])
}

// for of - используется для перебора массивов, строк и т.д.
// Итерация по элементам, а не их индексам
// for (Element of Iterable) {
// }
const myString = "Hey"

for (const letter of myString) {
    console.log(letter)
}

// Прерывание цикла - break
let someNum = 0

while (true) {
    if (someNum >= 10) break;
    someNum++;
    // console.log(someNum);
}

// Переход к следующей итерации - continue
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) continue
    else console.log(i)

}

// Выход из вложенного цикла на самый верх
// labelName: for (...) {
//   ...
// }
// Вызов break <labelName> в цикле ниже ищет ближайший внешний цикл с 
// такой меткой и переходит в его конец.
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Значение на координатах (${i},${j})`, '');
//     // если пустая строка или Отмена, то выйти из обоих циклов
//     if (!input) break outer; // (*)
//     // сделать что-нибудь со значениями...
//   }
// }
// alert('Готово!');
