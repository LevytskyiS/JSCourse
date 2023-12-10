// Деструктуризация - присвоение значения/й объекта переменной
// Пример деструктуризации объекта
const userProfile = {
    name: 'John',
    commentQty: 30,
    hasSignedAgreement: false,
}
// Создание новый переменных на основе свойств существующего объекта
const { name, commentQty } = userProfile
const { hasSignedAgreement } = userProfile

// Пример деструктуризации массива
const friuts = ["Apple", "Orange"]
const [friutOne, friutTwo] = friuts

// Пример деструктуризации в функции
const userInfo = ({ name, commentQty}) => {
    if (!commentQty) {
        return `User ${name} does not have any comments`
    }

    return `User ${name} has ${commentQty} comments`
}

userInfo(userProfile)