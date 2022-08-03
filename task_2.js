let field = 2;
// let field = '2';
// let field = true;
// let field;
let type = typeof(field);

switch (type) {
    case ('number'):
        console.log('X - число');
        break;
    case ('string'):
        console.log('X - строка');
        break;
    case ('boolean'):
        console.log('X - логический тип');
        break;
    default:
        console.log('Тип x не определён');
        break;
}
