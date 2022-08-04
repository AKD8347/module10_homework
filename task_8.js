let names = new Map();
names.set(1, 'Alex')
    .set(2, 'Helena')
    .set(3, 'Jyly');
for (let item of names) {
    console.log(`Ключ — ${item[0]}, значение — ${item[1]}`);
}
