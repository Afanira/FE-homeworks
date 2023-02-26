let number = prompt ("Введите любое число: ");
console.log(number ** 2);

if (+number === 0) {
    console.log ("Число равно 0!")}
else if (+number % 2 == 0) {
    console.log ("Число четное!")
}
else if (isNaN(+number)) {
    console.log("Нужно ввести число!")
 }
else {
    console.log("Число нечетное!")
}
 

if (isNaN(+number)) {
    console.log ("Это значение преобразовать в число не получится! Получится NaN")
}
else {
    console.log ("Это значение можно преобразовать в число!")
}

