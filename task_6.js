let arr = [1, 2, 2, 3, 5, 4, 5, 6, 1, 7, 1, 4, 9, 10, 3]
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++)
        if (arr[j] === arr[i]) {
            console.log(true);
        } else {
            console.log(false);
        }
}
