// Есть:
// Инструкция
// Выражение-инструкция

// 5:27:00

// Выражение всегда возвращает значение
// Инструкция выполняет определенные действия
// Каждую инструкцию следует завершать точкой с запятой
// Точка с запятой не требуется после блока инструкции 
// Точку с запятой можно опускать

let a; // инструкция
const b = 5; // инструкция

if (a > b) {
    console.log("a is grater than b");
} // весь блок является инструкцией

for (let i = 0; i++; i < 5) {
    console.log(i);
} // весь блок является инструкцией

// Выражение может быть инструкцией
"abc";
a = a + 3;
c = a + b;
d  = "Good" + " Evening"
// myFunc(c, d);
console.log("Hey")

// Инструкцию нельзя передать как аргумент функции - будет SyntaxError