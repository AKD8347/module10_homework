let input = prompt('Введите значение');
let result = +input;
if (isNaN(result)) {
    console.log('Упс, кажется, вы ошиблись')
} else  {
    if (result % 2 == 0) {
        console.log('Четное число')
    } else if (result % 2) {
        console.log('Нечетное число')
    }
}
