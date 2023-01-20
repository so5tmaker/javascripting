const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = number => number % 2 === 0;
const filtered = numbers.filter(n => evenNumber(n));
console.log(filtered);