let arr = [1, 2, 2, 88, null, 5, '4', 5, null, '6', ':', 1, 7, 1, 4, 9, 10, 3];
let even = 0;
let odd = 0;
let nullEl = 0;
arr.forEach(function (item, index, array) {
    let number = +item;
    if (number == 0) {
        nullEl++;
    } else {
        if(number % 2 == 0) {
            even++;
        } else if (number % 1 == 0) {
            odd++;
        }
    }

})
console.log(`even elements: ${even}, odd elements: ${odd}, null elements: ${nullEl}`);
