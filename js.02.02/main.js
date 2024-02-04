// 2.1.1

// let mass = [1,1,2,3,3,3,0]
// for (let i = 0;i < mass.length;i++){
//     if (mass[i] === 0){
//         alert(i)
//     }
// }

// 2.1.2
// for (let num = 0;num <=1000;num++){
//     let str = String(num)
//     let sum = parseInt(str[0])+parseInt(str[1])
//     if (sum==5){
//         let res = Number(str)
//         console.log(num)
//     }
// }

// 2.1.3

// let mass = [1,2, 2,3,4,5,6,7,8,9,10]
// let num = 2
// for (let i = 0; i < mass.length; i++){
//     if (mass[i]==num){
//         mass.splice(i,1)
//         i--
//         console.log(mass)
//     }
// }

// 2.1.4

// let mass = [1,2,3,4,5,6,7,8]
// let result = 0
// for(let i = 0;i < mass.length/2;i++){
//     result += mass[i]
    
// }
// console.log(result)

// 2.2.1

// let mass = [1,2,3,-4,-5,1]
// let result = 0
// for (let i = 0;i < mass.length; i++){
//     if (mass[i] < 0){
//         result++
//     }
// }
// console.log(result)

// 2.2.2

// let mass = [1,2,3,-4,-5,1]
// let result = 0
// for (let i = 0;i < mass.length; i++){
//     if (mass[i] < 0){
//         mass.splice(i,1)
//         i--
//     }
// }
// console.log(mass)

// 2.2.3

// let mass = [1,2,3,-4,-5,1,2]

// for (let i = 0;i < mass.length; i++){
//     if(i == mass.length - 2){
//         mass.splice(i,1)
//         i--
//     }
// }

// console.log(mass)

// 2.2.4

// let mass = [1,2,3,4,5,6,7,8]
// let result = 0
// let result2 = 0
// for(let i = 0;i < mass.length/2;i++){
//     result += mass[i]
    
// }
// for(let i = mass.length/2;i < mass.length;i++){
//     result2 += mass[i]
// }
// let res = result/result2
// console.log(res)

// 2.3.1

// let text1 = 'игра'
// let text2 = 'рарфа'

// if (text1.charAt(text1.length-1) === text2.charAt(0)){
//     alert('Совпало')
// }else{
//     alert('Увы')
// }

// 2.3.2

// let mass = [1,2, 2,3,4,5,6,7,8,9,0,0,0]
// let num = 0
// let res = 0
// for (let i = 0; i < mass.length; i++){
//     if (mass[i]==num){
//         res ++
//         if (res == 3){
//             console.log(`Индекс третьего 0: ${i}`)
//         }
//     }
// }

// 2.3.3

// let mass = '12,34,56';

// let numbers = mass.split(',');
// let result = 0
// for (let i = 0; i < numbers.length;i++){
//     result += parseInt(numbers[i])
// }

// console.log(result)

// 2.3.4

// let mass = '2025-12-31'

// let numbers = mass.split('-');

// let res = `year: '${numbers[0]}',
// month: '${numbers[1]}',
// day: '${numbers[2]}'`


// console.log(res)

// 2.4.1
// let mass = 'ejgjehg123'
// num:
// for (let i =0;i < mass.length; i++){
//     for(let y = 0;y<10;y++){
//         if (mass[i]==y){
//             console.log(i);
//             break num;
//         }
//     }
// }

// 2.4.2

// let mass = {
//     1: 'один',
//     2: 'два',
//     3: 'три'
// }

// let key = Object.keys(mass)
// let value = Object.values(mass)
// console.log(key)
// console.log(value)

// 2.4.3
// let number = 122;
// let numString = String(number);

// let result = 0;

// for (let i = 0; i < numString.length; i++) {
//     let res = parseInt(numString[i]);
//         if (res % 2 === 0) {
//         result += 1;
//     }
// }

// console.log(`Количество четных цифр: ${result}`);

// 2.4.4

// let inputString = 'abcde';
// let res = inputString.split('');

// for (let i = 0; i < res.length; i += 2) {
//     res[i] = res[i].toUpperCase();
// }

// let resultString = res.join('');
// console.log(resultString);

// 2.4.5

// let mass = ['aaa bbb ccc'];
// let res = mass[0].split(' ');

// for (let i = 0; i < res.length; i++) {
//     res[i] = res[i][0].toUpperCase() + res[i].slice(1);
// }

// alert(res.join(' '));

// 2.5.1

// let mass = '023m0df0dfg0'

// let res = mass.split('')
// let result = []
// for (let i = 0;i<res.length; i++){
//     if (res[i] === '0'){
//         result.push(i)
//     }
// }

// console.log(result)

// 2.5.2

// let str = 'abcdefg';
// let result = '';

// for (let i = 0; i < str.length; i++) {
//     if ((i + 1) % 3 !== 0) {
//         result += str[i];
//     }
// }

// console.log(result);

// 2.5.3

// let int = [1, 2, 3, 4, 5, 6];

// let chet = 0;
// let nechet = 0;

// for (let i = 0; i < int.length; i++) {
//     if (int[i] % 2 === 0) {
//         chet += int[i];
//     } else {
//         nechet += int[i];
//     }
// }

// let result = chet / nechet
// console.log(result);

// 2.6.1

// let mass = '1313wfsf2341saf214'

// let res = mass.split('')
// let result = []
// for (let i = 0; i < res.length; i++){
//     for (let y = 0; y <= 9; y++){
//         if (parseInt(res[i]) == y){
//             result.push(i)
//         }
//     }
// }

// console.log(result)

// 2.6.2

// let numbers = [123, 456, 789];
// let reversedNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     let numStr = numbers[i].toString();
//     let reversedStr = '';

//     for (let j = numStr.length - 1; j >= 0; j--) {
//         reversedStr += numStr[j];
//     }

//     reversedNumbers.push(parseInt(reversedStr));
// }

// console.log(reversedNumbers);

// 2.6.3

// let numberString = '1234567';
// let result = '';

// for (let i = numberString.length - 1, count = 0; i >= 0; i--, count++) {
//     result = numberString[i] + result;
//     if (count === 2 && i !== 0) {
//         result = ' ' + result;
//         count = -1;
//     }
// }

// console.log(result);


// 2.6.4

// let mass = 'AbCdE'

// let res = mass.split('')

// for (let i = 0; i <mass.length; i++){
//     if (res[i] === res[i].toUpperCase()){
//         res[i] = res[i].toLowerCase()
//     } else{
//         res[i] = res[i].toUpperCase()
//     }
// }
// let mass_res = res.join('')
// console.log(mass_res)

// 2.6.5

// let mass = [1, 2, 3, 4, 5, 6];
// let result = [];

// for (let i = 0, count = 1; i < mass.length; i++, count++) {
//     if (count % 2 === 0) {
//         result[result.length - 1] = result[result.length - 1] * 10 + mass[i];
//     } else {
//         result.push(mass[i]);
//     }
// }

// console.log(result);

// 2.6.6

// let mass = 'aaa bbb ccc eee fff'

// let res = mass.split(' ')

// for (let i = 0, count=1;i<res.length; i++, count++){
//     if (count%2===0){
//         res[i] = res[i][0].toUpperCase()+ res[i].slice(1)
//     }
// }

// let result = res.join(' ')
// console.log(result)


// 2.7.1

// let mass = 'a bc def ghij'

// let res = mass.split(' ')

// for (let i = 0; i < res.length; i++){
//     if (res[i].length <=3){
//         res[i] = res[i].toUpperCase()
//     }
// }

// let result = res.join(' ')
// console.log(result)

// 2.7.2

// let sim = 'A'

// if (sim === sim.toLowerCase()){
//     console.log('Символ в нижнем регистре')
// }else{
//     console.log('Символ в верхнем регистре')
// }


// 2.7.3

// let mass = 123789

// let res = mass.toString()
// let result = res.split('')
// let ress = []
// for (let i = 0; i < result.length; i++){
//     if (result[i]%2===0){
//         ress.push(result[i])
//     }
// }
// let resultat = ress.join('')
// console.log(resultat)

// 2.8.1

// let mass = 'wfwfBFDdbFD'

// let res = mass.split('')
// let value = 0

// for (let i = 0;i<res.length;i++){
//     if (res[i]===res[i].toUpperCase()){
//         value++
//     }
// }

// console.log(`Количество заглавных букв: ${value}`)


// 2.8.2

// let mass = '1 22 333 4444 22 5555 1'

// let res = mass.split(' ')
// let result = []

// for (let i = 0; i < res.length; i++){
//     if (res[i].length <= 3){
//         result.push(res[i])
//     }
// }

// let res_mass = result.join(' ')

// console.log(res_mass)

// 2.8.3

// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];

// let result = arr1.concat(arr2);

// console.log(result);

// 2.9.1
// let num = 123456;

// let res = num.toString();

// let result = res.split('');
// let ress = [];
// let num_res = 0
// for (let i = 0, count = 1; i < result.length; i++, count++) {
//     if (count % 2 === 0) {
//         let pairSum = parseInt(result[i - 1] + result[i]);
//         ress.push(pairSum);
//     }
// }

// for (let i = 0; i<ress.length; i++){
//     num_res += ress[i]
// }

// console.log(num_res)

// 2.9.2


// let mass = [1,2,3,4,5]
// let res = []

// for (let i = mass.length ; i>=0; i--){
//     res.push(mass[i])
// }

// console.log(res)

// 2.10.1

// let mass = 'abcs123';

// let res = 0;

// for (let i = 0; i < mass.length; i++) {
//     let charCode = mass.charCodeAt(i);

//     if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//         res++;
//         if (res > 3) {
//             break;
//         }
//     }
// }

// if (res <= 3) {
//     console.log('В строке не более трех букв.');
// } else {
//     console.log('В строке более трех букв.');
// }

// 2.10.2

// let mass = 123445678;

// let res = mass.toString();

// let result = res.split('');
// let ress = [];

// for (let i = result.length - 1; i >= 0; i--) {
//     if (parseInt(result[i]) % 2 === 0) {
//         ress.push(result[i]);
//         break;
//     }
// }

// ress.reverse();
// console.log(ress.join(''));

// 2.10.3

// let mass = 'abcde abcde abcde';

// let words = mass.split(' ');

// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 0) {
//         words[i] = '!' + words[i].slice(1);
//     }
// }

// let result = words.join(' ');

// console.log(result);

// 2.10.4

let arr = [1, 2, 3, 3, 4, 5];

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
        console.log('Два одинаковых элемента подряд найдены');
        break;
    }
}
