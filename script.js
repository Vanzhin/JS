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
// alert("Задание 3");
// let a = prompt("укажите число");
// while (true) {
//     if (isNaN(a) || a === "") {
//         alert("необходимо ввести число");
//         a = prompt("укажите число");
//     }
//     else break;
// }
// let b = prompt("укажите второе число");
// while (true) {
//     if (isNaN(b) || b === "") {
//         alert("необходимо ввести число");
//         b = prompt("укажите второе число");
//     }
//     else break;
// }
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
// alert("Задание 5");
// let d = parseInt(prompt("введите первое число"));
// let f = parseInt(prompt("введите второе число"));


// function summ(d, f) {
//     let e = d + f;
//     return e;
// }

// function subtraction(d, f) {
//     let e = d - f;
//     return e;
// }

// function multiply(d, f) {
//     let e = d * f;
//     return e;
// }

// function division(d, f) {
//     let e = d / f;
//     return e;
// }

// alert("сумма чисел равна " + summ(d, f));
// subtraction(d, f);
// alert("разность чисел равна " + subtraction(d, f));
// multiply(d, f);
// alert("умножение чисел равно: " + multiply(d, f));
// division(d, f);
// alert("деление первого на второе число: " + division(d, f));

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
//     if (pow === 0) {
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
// alert(`число ${val} в степени ${pow} равно ${current}`);

// < !--HomeWork 3 -- >
// < !--ex1 -->

// let digit = 100;
// let digits = [];
// let i = 2;

// nextPrime:
// while (i < digit) {
//     i++;
//     let j = 2;
//     while (j < i) {
//         if (i % j == 0) { continue nextPrime; }
//         j++
//     }

//     digits.push(i);
// }
// alert(`Простые числа от 0 до ${digit}: ${digits}`);

// // < !--ex2 -->

// let cart = [
//     { art: 1, itemName: "T-shirt", brandName: "Mango", price: 150, quantity: 2 },
//     { art: 2, itemName: "T-shirt", brandName: "Mango", price: 100, quantity: 2 },
//     { art: 3, itemName: "T-shirt", brandName: "Mango", price: 75, quantity: 2 },
//     { art: 4, itemName: "T-shirt", brandName: "Mango", price: 50, quantity: 2 },
//     { art: 5, itemName: "T-shirt", brandName: "Mango", price: 50, quantity: 2 }

// ];
// function countBasketPrice(n) {
//     let currentTotalPrice = 0;
//     n = cart.length;
//     for (let i = 0; i <= cart.length - 1; i++) {
//         let itemPrice = cart[i].price * cart[i].quantity;
//         currentTotalPrice += itemPrice;
//     }
//     return currentTotalPrice;
// }
// let totalPrice = countBasketPrice(cart.length);
// alert(`Итоговая сумма: ${totalPrice}`);

// // < !--ex3 -->

// for (let i = 0; i < 10; alert(i++)) {

// }
//     // < !--ex4 -->
//     let star = "*";
//     for (let i = 0; i < 20; i++) {
//         console.log(star);
//         star += "*";
//     }

// test

// const numbers = [1, 2, 3];
// const doubles = numbers.map(function (num) {
//     return num * num;
// });
// console.log(doubles);

// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic' },
//     { name: 'Zeros', value: 37 }
// ];
// items.sort(function (a, b) {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     // a должно быть равным b
//     return 0;
// });
// console.log(items);


// < !--HomeWork 4 -- >
// < !--ex1 -->


// let n = Math.floor((Math.random() * 2000), 0);
// console.log(n);
// function getObject(n) {
//     if (n > 999) {
//         console.log("число превышает 999");
//         return {};
//     }
//     let hund = Math.floor((n / 100));
//     let dec = Math.floor((n - hund * 100) / 10);
//     let one = Math.floor(n - hund * 100 - dec * 10);
//     const numbers = {
//         единицы: one,
//         десятки: dec,
//         сотни: hund
//     }
//     return (numbers);


// }
// console.log(getObject(n));

// // < !--ex2 -->
// function Product(art, itemName, desc, price, brandName) {
//     this.art = art;
//     this.itemName = itemName;
//     this.desc = desc;
//     this.price = price;
//     this.brandName = brandName;
// };

// let additionalInfo = {
//     score: 5,

// };

// Product.prototype = additionalInfo;

// let products = [
//     new Product(1, `t - shirt`, `goods description1`, 100, `mango`),
//     new Product(2, `t - shirt`, `goods description2`, 120, `levis`),
//     new Product(3, `t - shirt`, `goods description3`, 130, `GJ`),
//     new Product(4, `t - shirt`, `goods description4`, 150, `adidas`),
//     new Product(5, `t - shirt`, `goods description5`, 200, `nike`),
// ];
// console.log(products);

// function BasketItem(art, itemName, price, quantity) {
//     this.art = art;
//     this.itemName = itemName;
//     this.price = price;
//     this.quantity = quantity;
//     this.makeDiscount = function (discount) {
//         this.price = this.price * (100 - discount) / 100;
//     }

// }
// let basket = [
//     new BasketItem(products[0].art, products[0].itemName, products[0].price, 2),
//     new BasketItem(products[2].art, products[2].itemName, products[2].price, 3),
//     new BasketItem(products[3].art, products[3].itemName, products[3].price, 10)
// ]
// for (let newPrice of basket) {
//     newPrice.makeDiscount(10);
// }
// function totalBasketPrice(basketArr) {
//     let currenttotalPrice = 0;
//     for (let i = 0; i <= basketArr.length - 1; i++) {
//         let totalPrice = basketArr[i].price * basketArr[i].quantity;
//         currenttotalPrice += totalPrice;

//     }
//     return currenttotalPrice;

// }
// console.log(basket)

// console.log(`стоимость корзины v1: ${totalBasketPrice(basket)}`);

// // еще вариант

// const basketV2 = {
//     item1: {
//         art: 1, itemName: `t-shirt`, desc: `description1`, price: 100, brandName: `mango`, quantity: 2
//     },
//     item2: {
//         art: 2, itemName: `t-shirt`, desc: `description2`, price: 150, brandName: `adidas`, quantity: 1
//     },
//     item3: {
//         art: 3, itemName: `t-shirt`, desc: `description3`, price: 200, brandName: `dior`, quantity: 3
//     },
//     totalBasketPrice() {
//         let p = this.item1.price * this.item1.quantity + this.item2.price * this.item2.quantity + this.item3.price * this.item3.quantity;
//         return p;
//     }
// }
// console.log(`стоимость корзины v2: ${basketV2.totalBasketPrice()}`);



// < !--HomeWork 5 -- >
// < !--ex 5-1 -->

function setChessTable() { //создаю тэг таблицы
    let chessDiv = document.querySelector(".chess");
    let table = document.createElement("table");
    chessDiv.appendChild(table);
    table.style.borderCollapse = "collapse";
    table.style.marginTop = "10px";
    let n = 1;
    let arrL = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""]; //массивы для букв и цифр
    let arrInt = ["", "1", "2", "3", "4", "5", "6", "7", "8", ""];
    // строю таблицу
    while (n <= 10) {
        let rowBW = document.createElement("tr");
        table.appendChild(rowBW);
        for (let i = 1; i <= 10; i++) {
            let td = document.createElement("td");
            rowBW.appendChild(td);
            td.style.width = "30px";
            td.style.height = "30px";
            td.style.textAlign = "center";
            // прописываю условия для стилей и наполнения разных клеток черным
            if (n == 10) {
                td.innerHTML = arrL[i - 1];
                td.style.backgroundColor = "lightgray";
                continue;
            }
            if (n == 1) {
                td.innerHTML = arrL[10 - i];
                td.style.transform = "rotate(180deg)";
                td.style.backgroundColor = "lightgray";
                continue;
            }
            if (n % 2 == 0 && i % 2 == 1) {
                td.style.backgroundColor = "black";
            }
            if (n % 2 == 1 && i % 2 == 0) {
                td.style.backgroundColor = "black";
            }
            if (n > 1 && n < 10, i == 1) {
                td.innerHTML = arrInt[10 - n];
                td.style.backgroundColor = "lightgray";
            }
            if (n > 1 && n < 10, i == 10) {
                td.innerHTML = arrInt[n - 1];
                td.style.backgroundColor = "white";
                td.style.transform = "rotate(180deg)";
                td.style.backgroundColor = "lightgray";
            }
        }
        n++;
    }
}
setChessTable();

// < !--ex 5-2 -->
function Product(art, itemName, desc, price, brandName) {
    this.art = art;
    this.itemName = itemName;
    this.desc = desc;
    this.price = price;
    this.brandName = brandName;
};
let products = [
    new Product(1, `t - shirt`, `goods description1`, 100, `mango`),
    new Product(2, `t - shirt`, `goods description2`, 120, `levis`),
    new Product(3, `t - shirt`, `goods description3`, 130, `GJ`),
    new Product(4, `t - shirt`, `goods description4`, 150, `adidas`),
    new Product(5, `t - shirt`, `goods description5`, 200, `nike`),
];
console.log(products);
let basket = []; //создаю пустой массив корзины

function BasketItem(art, itemName, price, quantity) {
    this.art = art;
    this.itemName = itemName;
    this.price = price;
    this.quantity = quantity;
    this.makeDiscount = function (discount) {
        this.price = this.price * (100 - discount) / 100;
    }
}

let div = document.querySelector("div"); //ищется div и вставляется h2
let basketAlert = document.createElement("h2");
div.appendChild(basketAlert);
basketReminder();

basket = [ //создается корзина
    new BasketItem(products[0].art, products[0].itemName, products[0].price, 2),
    new BasketItem(products[2].art, products[2].itemName, products[2].price, 3),
    new BasketItem(products[3].art, products[3].itemName, products[3].price, 10)
]
for (let newPrice of basket) {
    newPrice.makeDiscount(0);
}

function totalBasketPrice(basketArr) { //стоимость корзины
    let currenttotalPrice = 0;
    for (let i = 0; i <= basketArr.length - 1; i++) {
        let totalPrice = basketArr[i].price * basketArr[i].quantity;
        currenttotalPrice += totalPrice;
    }
    return currenttotalPrice;
}

function basketReminder() { //функция которая выводит стоимость и количество товаров
    if (basket.length < 1) {
        basketAlert.innerText = "корзина пуста";
    } else {
        basketAlert.innerText = `корзина содержит: ${basket.length} товаров на сумму ${totalBasketPrice(basket)}`
    }
}
basketReminder();
console.log(basket)

console.log(`стоимость корзины v1: ${totalBasketPrice(basket)}`);

// < !--ex 5-3 -->

let productsDiv = document.querySelector("#catalog");

function setProductTable(insertionAdress, productsArr) { //создаю таблицу
    let productsTable = document.createElement("table");
    insertionAdress.appendChild(productsTable);
    productsTable.style.border = "3px solid black";
    productsTable.style.borderCollapse = "collapse";
    productsTable.style.textAlign = "center";
    productsTable.style.marginTop = "20px";
    let n = 0;
    while (n < productsArr.length + 1) {
        let tRow = document.createElement("tr");
        productsTable.appendChild(tRow);

        if (n == 0) { //заполняю заголовок таблицы+стили
            for (let i = 0; i < Object.keys(products[0]).length; i++) {
                let tCol = document.createElement("td");
                tRow.appendChild(tCol);
                tCol.innerText = Object.keys(products[0])[i];
                tCol.style.border = "1px solid black";
                tCol.style.textTransform = "uppercase";
            }
        } else { //заполняю таблицу+стили
            for (let i = 0; i < Object.keys(products[0]).length; i++) {
                let tCol = document.createElement("td");
                tRow.appendChild(tCol);
                tCol.innerText = Object.values(products[n - 1])[i];
                tCol.style.textTransform = "capitalize";
                tCol.style.border = "1px solid black";

            }
        }
        n++;
    }
}
setProductTable(productsDiv, products);