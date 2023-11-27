// Обработка ошибок try-catch
const fnWithError = () => {
    throw new Error("Some error") // В этой строке ошибка
}

// B try-catch оборачивается вызов функции
try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log("Continue...")