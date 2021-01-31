"use strict";
//<!-- задание 1 -->
//let Tc = 20;
//let Tf = ((9 / 5) * Tc + 32);
//alert (Tf);
//<!-- задание 2 -->
//let name;
//let admin;
//name = "Василий";
//admin = name;
//alert (admin);
//<!-- задание 3 -->
//admin = 1000 + "108";
//alert (admin);

// < !--HomeWork 2 -- >
// < !--ex1 -->
//     alert("Задание 1, 2 - см. комментраний script.js");

// //var a = 1, b = 1, c, d;
// //c = ++a; alert(c);           // 2 т.к. с присваивается значение а с префиксной формой инкрементирования, где инкрементирование производится сразу и выводится с измененным значением.
// //d = b++; alert(d);           // 1 т.к. d  присваивается значение b с постфиксной формой инкрементирования. сначала происходит возврат значения,  затем инкрементирование.
// //c = (2+ ++a); alert(c);      // 5 т.к. сначала производится инкрементирование а = 2+1, затем операция сложения 2+3=5
// //d = (2+ b++); alert(d);      // 4 т.к. происходит возврат значения b=2, затем сложение 2+2 =4, вывод значениея, затем инкрементирование.
// //alert(a);                    // 3 инекрементирование произошло дважды в строках, где задавалось значение с
// //alert(b);                    // 3 инекрементирование произошло дважды в строках, где задавалось значение d

// < !--ex2 -->
// //var a = 2;
// //var x = 1 + (a *= 2); ответ 5. снасала производятся действвия в скобках, а =а*2, затем операция сложения = 1+2*2=5

// < !--ex3 -->
//     alert("Задание 3");
// let a = 1,
//     b = -2;
// if (a >= 0 && b >= 0) {
//     alert(a - b);
// } else if (a < 0 && b < 0) {
//     alert(a * b);
// } else {
//     alert(a + b);
// }

// < !--ex4 -->
//     alert("Задание 4");
// let c = Math.floor(Math.random() * 16);
// switch (c) {
//     case 0:
//         alert("0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 1:
//         alert("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 2:
//         alert("2,3,4,5,6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 3:
//         alert("3,4,5,6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 4:
//         alert("4,5,6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 5:
//         alert("5,6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 6:
//         alert("6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 7:
//         alert("7,8,9,10,11,12,13,14,15");
//         break;
//     case 8:
//         alert("8,9,10,11,12,13,14,15");
//         break;
//     case 9:
//         alert("9,10,11,12,13,14,15");
//         break;
//     case 10:
//         alert("10,11,12,13,14,15");
//         break;
//     case 11:
//         alert("11,12,13,14,15");
//         break;
//     case 11:
//         alert("11,12,13,14,15");
//         break;
//     case 12:
//         alert("12,13,14,15");
//         break;
//     case 13:
//         alert("13,14,15");
//         break;
//     case 14:
//         alert("14,15");
//         break;
//     default:
//         alert("15");
// }

// < !--ex5-- >
//     alert("Задание 5");
// let d = parseInt(prompt("введите первое число"));
// let f = parseInt(prompt("введите второе число"));
// let e;

// function summ(d, f) {
//     e = d + f;
//     return e;
// }

// function subtraction(d, f) {
//     e = d - f;
//     return e;
// }

// function multiply(d, f) {
//     e = d * f;
//     return e;
// }

// function division(d, f) {
//     e = d / f;
//     return e;
// }
// summ(d, f);

// alert("сумма чисел равна " + e);
// subtraction(d, f);
// alert("разность чисел равна " + e);
// multiply(d, f);
// alert("умножение чисел равно: " + e);
// division(d, f);
// alert("деление первого на второе число: " + e);

// < !--ex6-- >
//     alert("Задание 6");
// let arg1 = parseInt(prompt("введите первое число"));
// let arg2 = parseInt(prompt("введите второе число"));
// let operation = prompt("укажите одну операцию в формате: +, -, *, /");
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case "+":
//             summ(arg1, arg2);
//             e = "сумма чисел равна " + e;
//             break;
//         case "-":
//             subtraction(arg1, arg2);
//             e = "разность чисел равна " + e;
//             break;
//         case "*":
//             multiply(arg1, arg2);
//             e = "умножение чисел равно " + e;
//             break;

//         case "/":
//             division(arg1, arg2);
//             e = "деление первого на второе число: " + e;
//             break;
//         default:
//             e = "что-то пошло не так";
//     }


// }
// mathOperation(arg1, arg2, operation);
// alert(e);

// < !--ex7-- >
//     alert("Задание 7");
// let a7 = null;
// let b7 = 0;

// alert(a7 + " < " + b7 + " : " + Boolean(a7 < b7) + "\n" + a7 + " > " + b7 + " : " + Boolean(a7 > b7) + "\n" + a7 + " >= " + b7 + " : " + Boolean(a7 >= b7) + "\n" + a7 + " <= " + b7 + " : " + Boolean(a7 <= b7) + "\n" + a7 + " == " + b7 + " : " + Boolean(a7 == b7) + "\n" + a7 + " === " + b7 + " : " + Boolean(a7 === b7) + " прочитав несколько статей на эту тему, понял, что null  - отсутствие значения, а 0 - это число, а есть также разная логика сравнения при разных операторах сравнения");



// < !--ex8-- >
//     alert("Задание 8");

// function power(val, pow) {
//     if (pow == 0) {
//         return current;
//     }

//     else if (n + 1 <= pow && pow > 0) {
//         current *= val;
//         n++;
//         power(val, pow);
//         return current;
//     }
//     else if (n + 1 <= Math.abs(pow) && pow < 0) {
//         current /= val;
//         n++;
//         power(val, pow);
//         return current;
//     }



// }
// let val = parseInt(prompt("введите число"));
// let pow = parseInt(prompt("введите степень возведения"));
// let n = 0;
// let current = 1;
// power(val, pow);
// alert("число " + val + " в степени " + pow + " равно " + current);

// < !--HomeWork 3 -- >
// < !--ex1 -->

let digit = 100;
let digits = [];
let i = 2;

nextPrime:
while (i < digit) {
    i++;
    let j = 2;
    while (j < i) {
        if (i % j == 0) { continue nextPrime; }
        j++
    }

    digits.push(i);
}
alert(`Простые числа от 0 до ${digit}: ${digits}`);

// < !--ex2 -->

let cart = [
    { art: 1, itemName: "T-shirt", brandName: "Mango", price: 150, quantity: 2 },
    { art: 2, itemName: "T-shirt", brandName: "Mango", price: 100, quantity: 2 },
    { art: 3, itemName: "T-shirt", brandName: "Mango", price: 75, quantity: 2 },
    { art: 4, itemName: "T-shirt", brandName: "Mango", price: 50, quantity: 2 },
    { art: 5, itemName: "T-shirt", brandName: "Mango", price: 50, quantity: 2 }

];
function countBasketPrice(n) {
    let currentTotalPrice = 0;
    n = cart.length;
    for (let i = 0; i <= cart.length - 1; i++) {
        let itemPrice = cart[i].price * cart[i].quantity;
        currentTotalPrice += itemPrice;
    }
    return currentTotalPrice;
}
let totalPrice = countBasketPrice(cart.length);
alert(`Итоговая сумма: ${totalPrice}`);

// < !--ex3 -->

for (let i = 0; i < 10; alert(i++)) {

    // }
    // < !--ex4 -->
    let star = "*";
    for (let i = 0; i < 20; i++) {
        console.log(star);
        star += "*";
    }
