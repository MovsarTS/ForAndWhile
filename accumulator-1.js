// В файле accumulator-1.js создай массив с десятью элементами числового типа.
let arr = [1,2,3,4,5,6,7,8,9,10]
// Создай переменную accumulator и собери в ней сумму всех элементов массива. Для решения используй цикл for.
let a = 0;
for (let i = 0; i < arr.length; i++){
a = a + arr[i]
}
console.log(a)